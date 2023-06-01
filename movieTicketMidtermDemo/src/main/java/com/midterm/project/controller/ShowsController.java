package com.midterm.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.midterm.project.entity.Shows;
import com.midterm.project.service.IShowsService;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "http://localhost:3000/")
public class ShowsController {
	@Autowired
	IShowsService showServices;
	
	@GetMapping("/allshows")
	public List<Shows> getAllShows(){
		return showServices.getShows();
		
	}
	
	@GetMapping("/getshows/{keyword}")
	public List<Shows> getShowsByMovies(@PathVariable String keyword) {
		return showServices.searchShowsByTitle(keyword);
	}
	

}

