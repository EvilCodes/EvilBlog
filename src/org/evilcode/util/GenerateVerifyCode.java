package org.evilcode.util;

import java.util.Random;
/**
 * @author BlackFox
 * ����������λ�����֤��Ĺ�����
 *
 */
public class GenerateVerifyCode {
	
	public static Random random;
	public int codeLength;
	public static String finalCode;
	private  static GenerateVerifyCode instance;
	private StringBuffer sb;
	
	
	private GenerateVerifyCode(){
		
	}
	
	public static GenerateVerifyCode getInstance(){
		
		if (null==instance) {
			synchronized (GenerateVerifyCode.class) {
				if (null==instance) {
					instance=new GenerateVerifyCode();
				}
			}
		}
		return instance;
		
	}
	
	
	public GenerateVerifyCode setCodeNum(int codeLength) {
		this.codeLength = codeLength;
		return this;
	}

	/**
	 * ��ʼ����Ա����
	 */
	public GenerateVerifyCode init(){
		random=new Random();
		sb=new StringBuffer();
			return this;
	}
	
	public String generateCode(){
		int singleCode ;
		for (int i = 0; i <codeLength ; i++) {
			singleCode= random.nextInt(9);
			sb.append(String.valueOf(singleCode));
			
		}
		finalCode=sb.toString();
		return finalCode;
		
	}
	
	

}
