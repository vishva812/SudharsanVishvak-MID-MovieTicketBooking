package com.midterm.project.entity;

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


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Theatre 
{
	@Id
	@Column(name = "theatre_id")
	private Integer theatreId;
	
	@Column(name = "theatre_name")
	private String theatreName;
	
	@Column(name = "location")
	private String location;
	
	@Column(name = "seating_capacity")
	private Integer seatingCapacity;
	
	@Column(name = "ticket_price")
	private Double ticketPrice;

}
