package com.midterm.project.entity;

import java.sql.Date; 



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking 
{
	@Id
	@Column(name = "bookind_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int bookingId;
	
	@Column(name = "customer_id")
	private String customerId;
	
	@ManyToOne
	@JoinColumn(name = "show_id")
	private Shows show;
	
	@Column(name = "booking_date")
	private Date bookingDate;
	
	@Column(name = "total_amount")
	private Double totalAmount;
	
	@Column(name = "payment_method")
	private String paymentMethod;
	
	@Column(name = "seat_no")
	int seatNo;

}
