package com.react.registration.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.react.registration.entity.Login;

@Repository
public interface LoginRepo extends JpaRepository<Login, Integer> {
	
	List<Login> getByEmail(String email);

}
