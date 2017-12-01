package org.evilcode.model.pojo;

public class Course {
	
	private int id ;
	private String name;
	private String desc;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDes() {
		return desc;
	}
	public void setDes(String des) {
		this.desc = des;
	}
	@Override
	public String toString() {
		return "Course [id=" + id + ", name=" + name + ", desc=" + desc + "]";
	}
	
	

}
