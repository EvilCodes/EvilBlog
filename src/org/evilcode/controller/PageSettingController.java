package org.evilcode.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/pages")
public class PageSettingController {
	
	@RequestMapping("/setting.do")
	private String goToHead(){
		
		return "setting";
	}
	
	
	

}
