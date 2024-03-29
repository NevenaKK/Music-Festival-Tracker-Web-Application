package com.jwd.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jwd.test.model.Izvodjac;
@Repository
public interface IzvodjacRepository extends JpaRepository<Izvodjac, Long>{

}
