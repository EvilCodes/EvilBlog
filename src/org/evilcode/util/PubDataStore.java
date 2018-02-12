package org.evilcode.util;

import java.util.HashMap;
import java.util.Map;

/**
 * 
 * 共有信息存储的类
 * @author BlackFox
 *
 */
public class PubDataStore {
	private Map<Long,String> regCode;
	private static PubDataStore instance;
	
	
	private PubDataStore(){
		
	}
	
	
	
	public Map<Long, String> getRegCode() {
		return regCode;
	}



	public static PubDataStore getInstance(){
		
		if (null==instance) {
			synchronized (PubDataStore.class) {
				if (null==instance) {
					
					instance=new PubDataStore();
				}
				
			}
			
		}
		return instance;
	}
	
	public PubDataStore initData(){
		regCode=new HashMap<>();
		return this;
	}
	
	public Map<Long,String> getDataStore(){
		return regCode;
	}
	
	public PubDataStore addData(Long phoneNum,String reNum){
		regCode.put(phoneNum, reNum);
		return this;
		
	}
	
	private void delData(String phoneNum){
		
		regCode.remove(phoneNum);
	}

}
