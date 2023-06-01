package com.midterm.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.midterm.project.entity.Theatre;
import com.midterm.project.service.ITheaterService;


@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class TheatreController {
	@Autowired
	ITheaterService theatreServices;
	
	
	
	@GetMapping("/theaters")
	public List<Theatre> getallT(){
		return theatreServices.getTheatres();
		
	}
	
	@GetMapping("/searchTheatres/{keyword}")
	public List<Theatre> searchTheatres(@PathVariable String keyword) {
		return theatreServices.searchTheatresByKeyword(keyword);
	}
	

}
