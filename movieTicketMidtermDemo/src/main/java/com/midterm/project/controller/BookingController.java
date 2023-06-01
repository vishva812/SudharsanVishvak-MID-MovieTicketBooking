package com.midterm.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.midterm.project.dto.BookingDto;
import com.midterm.project.entity.Booking;
import com.midterm.project.exception.MovieException;
import com.midterm.project.service.BookingServiceInterface;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/movies")
public class BookingController 
{
	@Autowired
	BookingServiceInterface bookingServices;
	
	@PostMapping("/bookticket")
	public Booking bookTicket(@RequestBody BookingDto booking) throws MovieException 
	{
		return bookingServices.bookTicket(booking);
	}
	
	@GetMapping("/getmybookinghistory")
	public List<Booking> getAllBookings(String customerId)
	{
		return bookingServices.getAllMyBookings(customerId);
	}
	@DeleteMapping("/cancelbooking/{bookingId}/{customerId}")
	public String cancelBooking(@PathVariable int bookingId,@PathVariable String customerId) throws MovieException 
	{
		return bookingServices.cancelMyBooking(bookingId,customerId);
	}
	@PutMapping("/booking/{bookingId}")
	public Booking updateBooking(@PathVariable int bookingId, @RequestBody BookingDto updatedBooking) throws MovieException
	{
		return bookingServices.updateBooking(bookingId, updatedBooking);
	}

}
