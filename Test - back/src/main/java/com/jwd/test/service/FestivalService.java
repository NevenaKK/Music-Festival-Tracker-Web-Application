package com.jwd.test.service;

import java.util.List;

import com.jwd.test.model.Festival;
import com.jwd.test.model.Izvodjac;
import com.jwd.test.model.Nastup;

public interface FestivalService {
	
	List<Festival> findAll();
	Festival findOne(Long id);

}
