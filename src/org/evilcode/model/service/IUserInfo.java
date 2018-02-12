package org.evilcode.model.service;

import org.evilcode.model.pojo.User;

public interface IUserInfo {
	
	User getUser(int id);
	
	boolean isPhoneExist(String phoneNum);
	
	void addUser(User user);

}
