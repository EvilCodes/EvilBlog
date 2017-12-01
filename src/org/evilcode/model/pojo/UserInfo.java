package org.evilcode.model.pojo;

import java.util.List;

public class UserInfo {
	private int id;
	private String username;
//	private String imgUrl;
	private String email;
	private String pwd;
	private List<Course> list;

	public UserInfo() {

	}

	public List<Course> getList() {
		return list;
	}

	public void setList(List<Course> list) {
		this.list = list;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

//	public String getImgUrl() {
//		return imgUrl;
//	}
//
//	public void setImgUrl(String imgUrl) {
//		this.imgUrl = imgUrl;
//	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ",  email=" + email + ", pwd=" + pwd
				+ "]";
	}

}
