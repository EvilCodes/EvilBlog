package org.evilcode.model.service;

import org.evilcode.model.pojo.Result;
import org.evilcode.model.pojo.User;

public interface IUserInfo {
	
	
	boolean isPhoneExist(String phoneNum);
	
	Result isLoginSuccess(User user);
	
	void addUser(User user);

}
