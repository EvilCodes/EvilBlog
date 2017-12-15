package org.evilcode.model.service.impl;

import org.evilcode.model.dao.IUserMsg;
import org.evilcode.model.dao.impl.UserMsgImpl;
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
	

}
