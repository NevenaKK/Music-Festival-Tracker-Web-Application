package com.jwd.test.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import com.jwd.test.model.Izvodjac;
import com.jwd.test.web.dto.IzvodjacDTO;

@Component
public class IzvodjacToIzvodjacDto implements Converter<Izvodjac,IzvodjacDTO>{

	@Override
	public IzvodjacDTO convert(Izvodjac source) {
		IzvodjacDTO dto=new IzvodjacDTO();
		
		dto.setBrojClanova(source.getBrojClanova());
		dto.setDrzavaPorekla(source.getDrzavaPorekla());
		dto.setId(source.getId());
		dto.setIme(source.getIme());
		dto.setZanr(source.getZanr());
		
		return dto;
		
	}
	
public List<IzvodjacDTO> convert(List<Izvodjac> izvodjaci) {
		
		List<IzvodjacDTO> dto=new ArrayList<IzvodjacDTO>();
		
		for(Izvodjac i:izvodjaci)
			dto.add(convert(i));
		
		return dto;
	}

}
