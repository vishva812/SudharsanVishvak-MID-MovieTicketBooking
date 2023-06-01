package com.midterm.project.service;

import java.util.List;


import com.midterm.project.entity.Theatre;



public interface ITheaterService {
	public List<Theatre> getTheatres();	
	public List<Theatre>searchTheatresByKeyword(String keyword);


}
