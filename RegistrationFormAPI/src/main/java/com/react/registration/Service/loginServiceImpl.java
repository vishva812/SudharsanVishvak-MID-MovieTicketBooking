package com.react.registration.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.react.registration.Repository.LoginRepo;
import com.react.registration.entity.Login;






@Service
public class loginServiceImpl implements loginService 
{
	@Autowired
	LoginRepo loginRepo;
	


	@Override
	public Login postLogin(Login Login) {
		// TODO Auto-generated method stub
		return loginRepo.save(Login);
	}

	
	public Login getByEmail(String email) {
		// TODO Auto-generated method stub
		 List<Login> list = loginRepo.getByEmail(email);
		 Login login = list.get(0);
		 return login;
				 
				 
	}

}
