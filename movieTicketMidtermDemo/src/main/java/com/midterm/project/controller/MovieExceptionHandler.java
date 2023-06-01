package com.midterm.project.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.midterm.project.exception.MovieException;
@ControllerAdvice
public class MovieExceptionHandler {
	
	@ExceptionHandler(MovieException.class)
	public ResponseEntity<String> exceptionHandler(MovieException exp){
		return new ResponseEntity<String>(exp.getMessage().toString(),HttpStatus.EXPECTATION_FAILED);
	}

}
