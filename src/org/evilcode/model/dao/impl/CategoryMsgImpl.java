package org.evilcode.model.dao.impl;

import java.util.List;

import org.apache.tomcat.util.http.mapper.Mapper;
import org.evilcode.mapper.TechMapper;
import org.evilcode.model.dao.ICategoryMsg;
import org.evilcode.model.pojo.TechCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
@Repository
public class CategoryMsgImpl implements ICategoryMsg{
	@Autowired
	TechMapper mapper;
	@Override
	public Object getAllTech() {
		List<TechCategory> techTabs = mapper.selectTechTabs();
		
		return techTabs;
	}

}
