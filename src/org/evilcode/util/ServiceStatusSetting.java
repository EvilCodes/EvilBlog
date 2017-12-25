package org.evilcode.util;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

public class ServiceStatusSetting {
	
	public static GeetestLib gtSdk;
	public static HashMap<String, String> param;
	public static String userid;
	
	private ServiceStatusSetting(){
		
	}
	
	public static class InnerConfig{
		
		public  InnerConfig  initData() {
			gtSdk = new GeetestLib(GeetestConfig.getGeetest_id(), GeetestConfig.getGeetest_key(),
					GeetestConfig.isnewfailback());
			userid = "test";

			// 自定义参数,可选择添加
			param = new HashMap<String, String>();

			param.put("user_id", userid); // 网站用户id
			param.put("client_type", "web"); // web:电脑上的浏览器；h5:手机上的浏览器，包括移动应用内完全内置的web_view；native：通过原生SDK植入APP应用的方式
			param.put("ip_address", "127.0.0.1"); // 传输用户请求验证时所携带的IP
			return this;
		}

		public InnerConfig setStatus(HttpServletRequest request) {
			// 进行验证预处理
			int gtServerStatus = gtSdk.preProcess(param);
			// 将服务器状态设置到session中
			request.getSession().setAttribute(gtSdk.gtServerStatusSessionKey, gtServerStatus);
			// 将userid设置到session中
			request.getSession().setAttribute("userid", userid);
			return this;
		}
		
		public ServiceStatusSetting build(){
			return new ServiceStatusSetting();
		}

		
		
	}
	public  String getResStr() {
		String resStr = "{}";
		resStr = gtSdk.getResponseStr();
		return resStr;

	}

	

}
