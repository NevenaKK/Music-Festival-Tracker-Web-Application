package com.jwd.test.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jwd.test.model.Izvodjac;
import com.jwd.test.repository.IzvodjacRepository;
import com.jwd.test.service.IzvodjacService;

@Service
public class JpaIzvodjacService implements IzvodjacService {

	@Autowired
	IzvodjacRepository izvodjacRepository;
	
	@Override
	public List<Izvodjac> findAll() {
		return izvodjacRepository.findAll();
	}

	@Override
	public Izvodjac save(Izvodjac izvodjac) {
		return izvodjacRepository.save(izvodjac);
	}

	@Override
	public Izvodjac findOne(Long id) {
		Optional<Izvodjac> izvodjac=izvodjacRepository.findById(id);
		
		if(izvodjac.isPresent())
			return izvodjac.get();
		return null;
	}

}
