package com.jwd.test.support;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import com.jwd.test.model.Nastup;
import com.jwd.test.service.FestivalService;
import com.jwd.test.service.IzvodjacService;
import com.jwd.test.service.NastupService;
import com.jwd.test.web.dto.NastupDTO;
@Component
public class NastupDtoToNastup implements Converter<NastupDTO, Nastup>{

	@Autowired
	NastupService nastupService;
	
	@Autowired
	FestivalService festivalService;
	
	@Autowired
	IzvodjacService izvodjacService;
	
	@Override
	public Nastup convert(NastupDTO source) {
		Nastup nastup=null;
		
		if(source.getId()==null)
			nastup=new Nastup();
		else
			nastup=nastupService.findOne(source.getId());
		
		if(nastup!=null) {
			nastup.setFestival(festivalService.findOne(source.getFestivalId()));
			nastup.setIzvodjac(izvodjacService.findOne(source.getIzvodjacId()));
		}
		
		return nastup;
	}

}
