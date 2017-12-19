package org.evilcode.controller;

import org.evilcode.model.pojo.User;
import org.evilcode.model.service.IUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {
	
	@Autowired
	private IUserInfo iUserInfoImpl;
	@RequestMapping("/hellojsp")
	public String jumpToHello(Model model){
		User user = iUserInfoImpl.getUser(1);
		model.addAttribute("name", user.getUsername());
		model.addAttribute("pwd", user.getPwd());
		model.addAttribute("email", user.getEmail());
		model.addAttribute("id", user.getId());
		return "focus";
		
		
		
		
	}

}
