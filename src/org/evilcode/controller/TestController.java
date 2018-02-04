package org.evilcode.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.evilcode.model.pojo.User;
import org.evilcode.model.service.IUserInfo;
import org.evilcode.util.ServiceStatusSetting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class TestController {
	
	@Autowired
	private IUserInfo iUserInfoImpl;
	
	@RequestMapping("/sign_in")
	public String jumpToHello(Model model){
		User user = iUserInfoImpl.getUser(1);
		model.addAttribute("name", user.getUsername());
		model.addAttribute("pwd", user.getPwd());
		model.addAttribute("email", user.getEmail());
		model.addAttribute("id", user.getId());
		return "sign_in";
	}
	
	@RequestMapping("/sign_up")
	public String jumptoSignUp(HttpServletRequest request){
		return "sign_up";
		
	}

	@RequestMapping("/gt/register1")
	public void getServiceStatus(@RequestParam("t") String date, HttpServletRequest request,HttpServletResponse response) {
		ServiceStatusSetting serviceStatusSetting = new ServiceStatusSetting.InnerConfig()
				.initData() 
				.setStatus(request)
				.build();
		String resStr = serviceStatusSetting.getResStr();
		try {
			PrintWriter writer = response.getWriter();
			writer.println(resStr);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@RequestMapping("/sendMsg")
	public void sendMsg(String msg_num){
		
		System.out.println("收到请求,手机号码是:"+msg_num);
		
	}

}
