package org.evilcode.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("pages")
public class PageFocusController {
	@RequestMapping("/focus.do")
	private String goToFocus(){
		
		return "focus";
	}

}
