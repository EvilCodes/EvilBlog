package org.evilcode.model.dao;

import org.evilcode.model.pojo.User;

public interface IUserMsg {
	User getUser(String phoneNum);
	
	User selectUserByPhoneNum(String phoneNum);
	
	void addUser(User user);
}
