package org.evilcode.model.service.impl;

import org.evilcode.model.dao.IUserMsg;
import org.evilcode.model.pojo.Result;
import org.evilcode.model.pojo.User;
import org.evilcode.model.service.IUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IUserInfoImpl implements IUserInfo{
	@Autowired
	private IUserMsg userMsgImpl;
	@Override
	public boolean isPhoneExist(String phoneNum) {
		User userData = userMsgImpl.selectUserByPhoneNum(phoneNum);
		if (null==userData) {
			
			return false;
		}else {
			return true;
		}
	}
	@Override
	public void addUser(User user) {
		if (null!=user) {
			userMsgImpl.addUser(user);
		}
		
	}
	@Override
	public Result isLoginSuccess(User user) {
		Result loginResult=new Result();
		String loginPhoneNum=String.valueOf(user.getPhonenum());
		boolean isUserExist = isPhoneExist(loginPhoneNum);
		if (isUserExist) {
			User oriUser = userMsgImpl.getUser(loginPhoneNum);
			String pwd = user.getPwd();
			String oriPwd = oriUser.getPwd();
			if (oriPwd.equals(pwd)) {
				loginResult.setResultCode(700);
				loginResult.setResultDesc("登录成功");
				
			}else {
				loginResult.setResultCode(707);
				loginResult.setResultDesc("密码错误请重新输入密码");
			}
			
		}else {
			loginResult.setResultCode(703);
			loginResult.setResultDesc("用户不存在请注册用户");
		}
		System.out.println("IUserInfoImpl.loginResult="+loginResult.toString());
		return loginResult;
		
	}
	
	
	

}
