package org.evilcode.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/pages")
public class FavoritePageController {
	
	@RequestMapping("/liking.do")
	private String goToHead(){
		
		return "like_article";
	}
	
	
	

}
