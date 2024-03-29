package com.jwd.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jwd.test.model.Festival;
@Repository
public interface FestivalRepository extends JpaRepository<Festival, Long>{

}
