package org.evilcode.util;

import java.util.Random;
/**
 * 用于生成六位随机验证码的工具类
 * @author BlackFox
 *
 */
public class VerifyCodeUtil {
	
	public static Random random;
	public int codeLength;
	public static String finalCode;
	private  static VerifyCodeUtil instance;
	private StringBuffer sb;
	
	
	private VerifyCodeUtil(){
		
	}
	
	public static VerifyCodeUtil getInstance(){
		
		if (null==instance) {
			synchronized (VerifyCodeUtil.class) {
				if (null==instance) {
					instance=new VerifyCodeUtil();
				}
			}
		}
		return instance;
		
	}
	
	
	public VerifyCodeUtil setCodeNum(int codeLength) {
		this.codeLength = codeLength;
		return this;
	}

	/**
	 * 初始化成员变量
	 */
	public VerifyCodeUtil init(){
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
