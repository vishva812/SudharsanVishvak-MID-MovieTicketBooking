package com.react.registration.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.react.registration.Service.loginService;
import com.react.registration.entity.Login;


@RestController
@RequestMapping("/registration")
@CrossOrigin("http://localhost:3000")
public class loginController 
{
	@Autowired
	loginService loginService;
	
	@PostMapping("/postdetails")
	public Login postLogin(@RequestBody Login Login) {
		return loginService.postLogin(Login);
	}
	
	@GetMapping("/login/{email}")
	public Login getByEmail(@PathVariable("email") String email) {
		return loginService.getByEmail(email);
	}
	

}
