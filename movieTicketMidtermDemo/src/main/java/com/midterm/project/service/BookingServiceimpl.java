package com.midterm.project.service;



import java.sql.Date;
import java.sql.Time;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.midterm.project.dto.BookingDto;
import com.midterm.project.entity.Booking;
import com.midterm.project.entity.Shows;
import com.midterm.project.exception.MovieException;
import com.midterm.project.repo.BookingRepo;
import com.midterm.project.repo.ShowsRepo;
import com.midterm.project.repo.TheatreRepo;



@Service
public class BookingServiceimpl implements BookingServiceInterface 
{
	@Autowired
	BookingRepo bookingRepo;
	
	@Autowired
	ShowsRepo showsRepo;
	@Autowired
	TheatreRepo theatreRepo;
	
	
	public List<Booking> getAll()
	{
		return bookingRepo.findAll();
	}
	
	@Override
	public Booking bookTicket(BookingDto bookings) throws MovieException
	{
		Shows show = showsRepo.findById(bookings.getShowId()).orElseThrow(()-> new MovieException("Invalid ShowID"));
		
		LocalDateTime showDateTime = show.getShowDate().toLocalDate().atTime(show.getShowTime().toLocalTime());
		LocalDateTime now = LocalDateTime.now();
		String paymentMethod = bookings.getPaymentmethod();
		
		int theatreId = show.getTheatre().getTheatreId();
		double ticketPrice = show.getTheatre().getTicketPrice();
		Long noOfBookedSeats = bookingRepo.getBookedCount(show.getShowId());
		Long totalCapacity = theatreRepo.getTotalCapacity(theatreId);
		int availableSeats = (int) (totalCapacity - noOfBookedSeats);
		
		if(availableSeats <= 0) 
		{
			throw new MovieException("Sorry, Theatre is Housefull!!");
		}
		int seatNo = bookings.getSeatNo();
		if (seatNo > totalCapacity || seatNo <= 0) 
		{
			throw new MovieException("Sorry, You have an Invalid Seat Number!");
		}
		if(bookingRepo.getSeatNo(show.getShowId(),seatNo) != 0) 
		{
			throw new MovieException("Sorry, The Seat is Already Booked!");
		}
		if (showDateTime.isBefore(now))
		{
			throw new MovieException("Sorry, The Film is Already Started");
		}
		
		PaymentMethod payment = PaymentMethod.fromString(paymentMethod);
		if(payment == null) 
		{
			throw new MovieException("Payment Method is not Supported");
		}
		
		Booking details = new Booking();
		details.setSeatNo(seatNo);
		details.setBookingDate(Date.valueOf(now.toLocalDate()));
		//details.setCustomerId(SecurityContextHolder.getContext().getAuthentication().getName());
		details.setPaymentMethod(paymentMethod);
		details.setShow(show);
		details.setTotalAmount(ticketPrice);
		show.setAvailableSeats(availableSeats - 1);
		
		return bookingRepo.save(details);
		
	}
	
	enum PaymentMethod
	{
		CC("CC"),
		DC("DC"),
		UPI("UPI");
		
		private final String value;
		PaymentMethod(String value)
		{
			this.value = value;
		}
		
		public static PaymentMethod fromString(String value) 
		{
			for(PaymentMethod paymentMethod : PaymentMethod.values()) 
			{
				if(paymentMethod.value.equals(value)) 
				{
					return paymentMethod;
				}
			}
			return null;
		}
	}
	
	@Override
	public List<Booking> getAllMyBookings(String customerId)
	{
		//String customerId = SecurityContextHolder.getContext().getAuthentication().getName();
		return bookingRepo.findByCustomerId(customerId);
	}

	
@Transactional
@Override
public String cancelMyBooking(int bookingId,String customerId) throws MovieException {
	//String customerId = SecurityContextHolder.getContext().getAuthentication().getName();

	Shows show = bookingRepo.getShow(bookingId, customerId);
	System.out.println(show);
	if (show != null) {
		Date showDate = show.getShowDate();
		Time showTime = show.getShowTime();
		LocalDateTime showDateAndTime = showDate.toLocalDate().atTime(showTime.toLocalTime());
		LocalDateTime now = LocalDateTime.now();
		int availableSeats=show.getAvailableSeats();

		if (showDateAndTime.isAfter(now)) {
			
			
			bookingRepo.deleteByIdAndCustomerId(bookingId, customerId);
			show.setAvailableSeats(availableSeats+1);
			showsRepo.save(show);
			return "Booking is cancelled and you will get the refund in 3 working days";

		} else {
		
			
			System.out.println("You cannot cancel the Show, its Already Started");
			throw(new MovieException("You cannot cancel the Show, its Already Started"));
			//return "You cannot cancel the Show, its Already Started";
		}
	} else {
		System.out.println("Cannot find a show with the booking Id");
		throw(new MovieException("Cannot find a show with the booking Id"));
		//return "Cannot find a show with the booking Id";
	}

}
@Override
public Booking updateBooking(int bookingId, BookingDto updatedBooking) throws MovieException {
    Booking booking = bookingRepo.findById(updatedBooking.getBookingId()).orElseThrow(() -> new MovieException("Invalid Booking ID"));
    
    Shows show = showsRepo.findById(updatedBooking.getShowId()).orElseThrow(() -> new MovieException("Invalid Show ID"));
    
    LocalDateTime showDateTime = show.getShowDate().toLocalDate().atTime(show.getShowTime().toLocalTime());
    LocalDateTime now = LocalDateTime.now();
    String paymentMethod = updatedBooking.getPaymentmethod();
    
    int theatreId = show.getTheatre().getTheatreId();
    double ticketPrice = show.getTheatre().getTicketPrice();
    Long noOfBookedSeats = bookingRepo.getBookedCount(show.getShowId());
    Long totalCapacity = theatreRepo.getTotalCapacity(theatreId);
    int availableSeats = (int) (totalCapacity - noOfBookedSeats + booking.getSeatNo());
    
    if(availableSeats <= 0) {
        throw new MovieException("Sorry, Theatre is Housefull!!");
    }
    int seatNo = updatedBooking.getSeatNo();
    if (seatNo > totalCapacity || seatNo <= 0) {
        throw new MovieException("Sorry, You have an Invalid Seat Number!");
    }
    if(bookingRepo.getSeatNo(show.getShowId(), seatNo) != 0 && bookingRepo.getSeatNo(show.getShowId(), seatNo) != booking.getSeatNo()) {
        throw new MovieException("Sorry, The Seat is Already Booked!");
    }
    if (showDateTime.isBefore(now)) {
        throw new MovieException("Sorry, The Film is Already Started");
    }
    
    PaymentMethod payment = PaymentMethod.fromString(paymentMethod);
    if(payment == null) {
        throw new MovieException("Payment Method is not Supported");
    }
    
    booking.setSeatNo(seatNo);
    booking.setPaymentMethod(paymentMethod);
    booking.setShow(show);
    booking.setTotalAmount(ticketPrice);
    show.setAvailableSeats(availableSeats - 1);
    
    return bookingRepo.save(booking);
}


}
