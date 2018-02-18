package org.evilcode.controller;

import java.util.ArrayList;

import org.evilcode.model.pojo.TechCategory;
import org.evilcode.model.service.IThemeOperate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/pages")
public class PageHomeController {
	
	@Autowired
	IThemeOperate iThemeOperate;
	
	@RequestMapping("/home.do")
	private String goToHead(ModelMap map){
		ArrayList<TechCategory> techData = iThemeOperate.getAllData();
		map.addAttribute("techData", techData);
		return "home";
	}
	
	
	@RequestMapping("/initial.do")
	private String goToInitial(){
		return "homeinitial";
	}
	

}
