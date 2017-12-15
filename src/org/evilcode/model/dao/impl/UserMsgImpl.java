package org.evilcode.model.dao.impl;

import org.evilcode.mapper.ClassMapper;
import org.evilcode.model.dao.IUserMsg;
import org.evilcode.model.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;

public class UserMsgImpl implements IUserMsg{
	
	@Autowired
	ClassMapper classMapper;

	@Override
	public User getUser(int id) {
		return classMapper.selectUser(id);
	}

}
