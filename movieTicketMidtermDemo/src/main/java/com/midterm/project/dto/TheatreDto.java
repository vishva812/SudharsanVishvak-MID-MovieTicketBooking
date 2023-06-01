package com.midterm.project.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TheatreDto 
{
	private int theatreId;
	private String theatreName;
	private String  location;
	private int seatingCapacity;


}
