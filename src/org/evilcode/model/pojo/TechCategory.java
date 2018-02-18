package org.evilcode.model.pojo;

public class TechCategory {
	
	private int id;
	private String name;
	private String contet;
	private String tab_pic;
	
	public TechCategory(){
		
	}

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

	public String getContet() {
		return contet;
	}

	public void setContet(String contet) {
		this.contet = contet;
	}

	public String getTab_pic() {
		return tab_pic;
	}

	public void setTab_pic(String tab_pic) {
		this.tab_pic = tab_pic;
	}

	@Override
	public String toString() {
		return "TechCategory [id=" + id + ", name=" + name + ", contet=" + contet + ", tab_pic=" + tab_pic + "]";
	}
	
	

}
