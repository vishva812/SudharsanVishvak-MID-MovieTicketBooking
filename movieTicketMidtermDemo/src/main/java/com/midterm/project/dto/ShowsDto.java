package com.midterm.project.dto;

import java.sql.Date;
import java.sql.Time;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShowsDto 
{
	private int showId;
	private Date showDate;
	private Time showTime;
	private int availableSeats;

}
