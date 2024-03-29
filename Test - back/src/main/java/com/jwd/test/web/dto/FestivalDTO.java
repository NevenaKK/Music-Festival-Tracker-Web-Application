package com.jwd.test.web.dto;

import javax.persistence.Column;

public class FestivalDTO {

	private Long id;
	
    private String naziv;

	public FestivalDTO() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}
    
    
	
}
