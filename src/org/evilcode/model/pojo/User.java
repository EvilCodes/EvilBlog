package org.evilcode.model.pojo;

public class User {
	private int id;
	private String username;
	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getPhoneNum() {
		return phoneNum;
	}

	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}

	private String imgUrl;
	private String phoneNum;
	

	private String pwd;
//	private List<Course> list;

	public User() {

	}

//	public List<Course> getList() {
//		return list;
//	}
//
//	public void setList(List<Course> list) {
//		this.list = list;
//	}

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



	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", imgUrl=" + imgUrl + ", phoneNum=" + phoneNum + ", pwd="
				+ pwd + "]";
	}
	

}
