package org.evilcode.model.service.impl;

import java.util.ArrayList;

import org.evilcode.model.dao.ICategoryMsg;
import org.evilcode.model.pojo.TechCategory;
import org.evilcode.model.service.IThemeOperate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class IThemeOperateImpl implements IThemeOperate{
	@Autowired
	ICategoryMsg categoryMsg;
	@Override
	public ArrayList<TechCategory> getAllData() {
		ArrayList<TechCategory> allTechs= (ArrayList<TechCategory>) categoryMsg.getAllTech();
		return allTechs;
	}

}
