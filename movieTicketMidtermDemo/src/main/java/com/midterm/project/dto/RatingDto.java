package com.midterm.project.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RatingDto 
{
	private int movieId;
	private Double rating;
	private String review;
	private String customerId;
}
