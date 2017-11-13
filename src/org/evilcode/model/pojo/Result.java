package org.evilcode.model.pojo;

import java.util.List;

public class Result {
	
	private int resultCode;
	private String resultDesc;
	private Object resultEntity;
	private List resultList;
	private String resultDate;
	
	public int getResultCode() {
		return resultCode;
	}
	public void setResultCode(int resultCode) {
		this.resultCode = resultCode;
	}
	public String getResultDesc() {
		return resultDesc;
	}
	public void setResultDesc(String resultDesc) {
		this.resultDesc = resultDesc;
	}
	public Object getResultEntity() {
		return resultEntity;
	}
	public void setResultEntity(Object resultEntity) {
		this.resultEntity = resultEntity;
	}
	public List getResultList() {
		return resultList;
	}
	public void setResultList(List resultList) {
		this.resultList = resultList;
	}
	public String getResultDate() {
		return resultDate;
	}
	public void setResultDate(String resultDate) {
		this.resultDate = resultDate;
	}
	@Override
	public String toString() {
		return "Result [resultCode=" + resultCode + ", resultDesc=" + resultDesc + ", resultEntity=" + resultEntity
				+ ", resultList=" + resultList + ", resultDate=" + resultDate + "]";
	}
	
	

}
