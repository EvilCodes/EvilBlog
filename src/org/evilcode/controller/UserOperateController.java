package org.evilcode.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.evilcode.model.pojo.Result;
import org.evilcode.model.pojo.User;
import org.evilcode.model.service.IUserInfo;
import org.evilcode.util.GenerateVerifyCode;
import org.evilcode.util.MsgSendUtil;
import org.evilcode.util.PhoneFormatRec;
import org.evilcode.util.PubDataStore;
import org.evilcode.util.ServiceStatusSetting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserOperateController {

	@Autowired
	private IUserInfo iUserInfoImpl;

	@RequestMapping("/sign_in")
	public String jumpToHello(Model model) {
		// User user = iUserInfoImpl.getUser(1);
		// model.addAttribute("name", user.getUsername());
		// model.addAttribute("pwd", user.getPwd());
		// model.addAttribute("p honeNum", user.getPhoneNum());
		// model.addAttribute("id", user.getId());
		return "sign_in";
	}

	@RequestMapping("/sign_up")
	public String jumptoSignUp(HttpServletRequest request) {
		return "sign_up";

	}

	@RequestMapping("/gt/register1")
	public void registerVerify(@RequestParam("t") String date, HttpServletRequest request,
			HttpServletResponse response) {
		ServiceStatusSetting serviceStatusSetting = new ServiceStatusSetting.InnerConfig().initData().setStatus(request)
				.build();
		String resStr = serviceStatusSetting.getResStr();
		try {
			PrintWriter writer = response.getWriter();
			writer.println(resStr);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping("/gt/register-click")
	public void getServiceStatus(@RequestParam("t") String date, HttpServletRequest request,
			HttpServletResponse response) {
		ServiceStatusSetting serviceStatusSetting = new ServiceStatusSetting.InnerConfig().initData().setStatus(request)
				.build();
		String resStr = serviceStatusSetting.getResStr();
		try {
			PrintWriter writer = response.getWriter();
			writer.println(resStr);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping("/gt/validate-click")
	@ResponseBody
	public Result sendMsg(String recognizenum, String geetest_seccode) {
		Result result = null;
		if (null != geetest_seccode && null != recognizenum) {

			if (PhoneFormatRec.isPhoneLegal(recognizenum)) {
				if (!iUserInfoImpl.isPhoneExist(recognizenum)) {

					System.out.println("sendMsg.recognizenum="+recognizenum);
					String recCode = GenerateVerifyCode.getInstance().setCodeNum(6).init().generateCode();
					System.out.println("sendMsg.recCode="+recCode);
					PubDataStore.getInstance().initData().addData(Long.parseLong(recognizenum), recCode);
					String sid = "5e553c396a860a076e941a1db9bed35c";
					String token = "38a5a2aad28b88ea41c7e27937d7bcac";
					String appid = "4f7e7fd20d1e420085770eaa3b85c11b";
					String templateid = "280374";
					String param = recCode;
					String mobile = recognizenum;
					String uid = "2d92c6132139467b989d087c84a365d8";
					MsgSendUtil.getInstance().initializeData(sid, token, appid, templateid, param, mobile, uid)
							.testSendSms();

					System.out.println("收到请求,手机号码是:" + recognizenum);
					result = new Result();
					result.setResultCode(800);
					result.setResultDesc("短信发送成功");
				}else {
					result=new Result();
					result.setResultCode(809);
					result.setResultDesc("该号码已经注册请直接登录");
				}
			} else {
				result = new Result();
				result.setResultCode(808);
				result.setResultDesc("号码格式不对请重新输入");
			}

		}
		System.out.println("result=" + result);
		return result;

	}

	@RequestMapping("/users/register")
	public String register(User user,String sms_code) {
		Map<Long, String> regCode = PubDataStore.getInstance().getRegCode();
		Long phonenum = user.getPhonenum();
		
		System.out.println("user.sms_code="+regCode.get(phonenum)+",sms_code="+sms_code);
		if (regCode.get(phonenum).equals(sms_code)) {
			iUserInfoImpl.addUser(user);
			if (iUserInfoImpl.isPhoneExist(String.valueOf(phonenum))) {
				regCode.remove(phonenum);
				System.out.println("注册成功");
				return "head";
			}else {
				return null;
			}
		}else{
			System.out.println("验证码不正确请重新输入");
			regCode.remove(phonenum);
			return null;
		}
		

	}

	@RequestMapping("/login")
	public void login() {

	}

}
