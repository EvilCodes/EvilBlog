package org.evilcode.model.service.impl;

import org.evilcode.model.dao.IUserMsg;
import org.evilcode.model.pojo.User;
import org.evilcode.model.service.IUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IUserInfoImpl implements IUserInfo{
	@Autowired
	private IUserMsg userMsgImpl;
	@Override
	public User getUser(int id) {
		return userMsgImpl.getUser(id);
	}
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
	
	
	

}
