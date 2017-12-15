package org.evilcode.controller;

import org.evilcode.model.dao.IUserMsg;
import org.evilcode.model.dao.impl.UserMsgImpl;
import org.evilcode.model.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {
	@RequestMapping("/hellojsp")
	public String jumpToHello(Model model){
		IUserMsg msg=new UserMsgImpl();
		User user = msg.getUser(1);
		model.addAttribute("name", user.getUsername());
		model.addAttribute("pwd", user.getPwd());
		model.addAttribute("email", user.getEmail());
		model.addAttribute("id", user.getId());
		return "hello";
		
		
		
		
	}

}
