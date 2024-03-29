package com.jwd.test.support;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import com.jwd.test.model.Izvodjac;
import com.jwd.test.web.dto.IzvodjacDTO;

@Component
public class IzvodjacDtoToIzvodjac implements Converter<IzvodjacDTO, Izvodjac> {

	@Override
	public Izvodjac convert(IzvodjacDTO source) {
		Izvodjac izvodjac=new Izvodjac();
		
		izvodjac.setBrojClanova(source.getBrojClanova());
		izvodjac.setDrzavaPorekla(source.getDrzavaPorekla());
		izvodjac.setId(source.getId());
		izvodjac.setIme(source.getIme());
		izvodjac.setZanr(source.getZanr());
		
		return izvodjac;
	}

}
