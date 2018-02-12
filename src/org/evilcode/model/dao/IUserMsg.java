package org.evilcode.model.dao;

import org.evilcode.model.pojo.User;

public interface IUserMsg {
	User getUser(int id);
	
	User selectUserByPhoneNum(String phoneNum);
	
	void addUser(User user);
}
