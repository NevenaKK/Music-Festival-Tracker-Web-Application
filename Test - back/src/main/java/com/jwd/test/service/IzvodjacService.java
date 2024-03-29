package com.jwd.test.service;

import java.util.List;

import com.jwd.test.model.Izvodjac;
import com.jwd.test.model.Nastup;

public interface IzvodjacService {

	List<Izvodjac> findAll();
	Izvodjac save(Izvodjac izvodjac);
	Izvodjac findOne(Long id);
}
