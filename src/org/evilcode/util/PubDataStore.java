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
	private Map<String,String> regCode;
	private static PubDataStore instance;
	
	
	private PubDataStore(){
		
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
	
	private void initData(){
		regCode=new HashMap<>();
	}
	
	private Map<String,String> getDataStore(){
		return regCode;
	}
	
	private void addData(String phoneNum,String reNum){
		regCode.put(phoneNum, reNum);
		
	}
	
	private void delData(String phoneNum){
		
		regCode.remove(phoneNum);
	}

}
