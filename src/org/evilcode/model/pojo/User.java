package org.evilcode.model.pojo;

public class User {
	private int id;
	private String nickname;
	private Long phonenum;
	private String pwd;

	public User() {
	}

	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getNickname() {
		return nickname;
	}



	public void setNickname(String nickname) {
		this.nickname = nickname;
	}



	public Long getPhonenum() {
		return phonenum;
	}



	public void setPhonenum(Long phonenum) {
		this.phonenum = phonenum;
	}



	public String getPwd() {
		return pwd;
	}



	public void setPwd(String pwd) {
		this.pwd = pwd;
	}



	@Override
	public String toString() {
		return "User [id=" + id + ", nickname=" + nickname+ ", phonenum=" + phonenum + ", pwd=" + pwd + "]";
	}

	

}
