package org.evilcode.controller;


import org.evilcode.util.VerifyCodeUtil;
import org.junit.Test;

public class TestUtil {

	@Test
	public void test() {
		String code = VerifyCodeUtil.getInstance()
				.init()
				.setCodeNum(6)
				.generateCode();
		System.out.println("code="+code);
		
	}

}
