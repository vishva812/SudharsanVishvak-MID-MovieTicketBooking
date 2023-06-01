package com.midterm.project.service;

import java.util.List;



import com.midterm.project.dto.BookingDto;
import com.midterm.project.entity.Booking;
import com.midterm.project.exception.MovieException;

public interface BookingServiceInterface 
{
	public List<Booking> getAll();
	public Booking bookTicket(BookingDto bookings) throws MovieException;
	public List<Booking> getAllMyBookings(String customerId);
	public String cancelMyBooking(int bookingId, String customerId) throws MovieException;
	public Booking updateBooking(int bookingId, BookingDto updatedBooking) throws MovieException;
	

}
