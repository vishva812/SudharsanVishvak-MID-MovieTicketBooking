package com.midterm.project.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingDto 
{
	private int showId;
	private String paymentmethod;
	private int seatNo;
	private String customerId;
	private int bookingId;
	

}
