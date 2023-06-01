package com.midterm.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.midterm.project.entity.Theatre;

import com.midterm.project.repo.TheatreRepo;


@Service
public class TheaterServiceImpl implements ITheaterService{
	
	@Autowired
	TheatreRepo repo;
	
	@Override
	public List<Theatre> getTheatres() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public List<Theatre> searchTheatresByKeyword(String keyword) {
		// TODO Auto-generated method stub
		return repo.searchTheatresByKeyword(keyword.toLowerCase());
	}
	


}
