package org.evilcode.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/pages")
public class PageHomeController {
	
	@RequestMapping("/home.do")
	private String goToHead(){
		
		return "home";
	}
	
	
	@RequestMapping("/initial.do")
	private String goToInitial(){
		return "homeinitial";
	}
	

}
