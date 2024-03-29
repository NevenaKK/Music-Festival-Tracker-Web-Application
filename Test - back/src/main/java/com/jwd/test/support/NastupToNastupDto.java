package com.jwd.test.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import com.jwd.test.model.Nastup;
import com.jwd.test.web.dto.NastupDTO;

@Component
public class NastupToNastupDto implements Converter<Nastup, NastupDTO> {

	@Override
	public NastupDTO convert(Nastup source) {
		NastupDTO dto=new NastupDTO();
		
		dto.setFestivalId(source.getFestival().getId());
		dto.setFestivalNaziv(source.getFestival().getNaziv());
		dto.setId(source.getId());
		dto.setIzvodjacIme(source.getIzvodjac().getIme());
		dto.setIzvodjacId(source.getIzvodjac().getId());
		
		return dto;
		
		
	}
	
	
public List<NastupDTO> convert(List<Nastup> nastupi) {
		
		List<NastupDTO> dto=new ArrayList<NastupDTO>();
		
		for(Nastup n:nastupi)
			dto.add(convert(n));
		
		return dto;
	}

}
