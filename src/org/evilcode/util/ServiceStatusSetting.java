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

			// �Զ������,��ѡ�����
			param = new HashMap<String, String>();

			param.put("user_id", userid); // ��վ�û�id
			param.put("client_type", "web"); // web:�����ϵ��������h5:�ֻ��ϵ�������������ƶ�Ӧ������ȫ���õ�web_view��native��ͨ��ԭ��SDKֲ��APPӦ�õķ�ʽ
			param.put("ip_address", "127.0.0.1"); // �����û�������֤ʱ��Я����IP
			return this;
		}

		public InnerConfig setStatus(HttpServletRequest request) {
			// ������֤Ԥ����
			int gtServerStatus = gtSdk.preProcess(param);
			// ��������״̬���õ�session��
			request.getSession().setAttribute(gtSdk.gtServerStatusSessionKey, gtServerStatus);
			// ��userid���õ�session��
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
