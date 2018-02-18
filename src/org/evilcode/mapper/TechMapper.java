package org.evilcode.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.evilcode.model.pojo.TechCategory;

public interface TechMapper {
	
	@Select("select * from tech_tab")
	
	List<TechCategory> selectTechTabs();

}
