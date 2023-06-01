package com.react.registration.Service;

import java.util.List;

import javax.crypto.interfaces.DHPublicKey;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.react.registration.entity.Login;

public interface loginService 
{
	
	public Login postLogin(@RequestBody Login Login);
	public Login getByEmail(@PathVariable String email);

}
