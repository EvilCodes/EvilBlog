package org.evilcode.util;

import org.evilcode.model.pojo.MsgReg;
/**
 * 
 * @author BlackFox
 * 
 * �ͷ��Ͷ�����صĹ�����
 * 	- msgReg:���ڴ洢�û�������֤���Լ��ֻ�������ص�����
 * 	- instance:�ù�����ľ���ʵ��   
 *
 */
public class MsgSendUtil {
	private MsgReg msgReg;
	private static MsgSendUtil instance;
	
	static AbsRestClient InstantiationRestAPI() {
		return new JsonReqClient();
	}
	
	
	private MsgSendUtil(){
		
	}
	
	public static MsgSendUtil getInstance(){
		if (null==instance) {
			synchronized (MsgSendUtil.class) {
				if (null==instance) {
					instance=new MsgSendUtil();
				}
			}
		}
		return instance;
	}
	
	public void testSendSms(){
		try {
			String sid = msgReg.getSid();
			String token = msgReg.getToken();
			String appid = msgReg.getAppid();
			String templateid = msgReg.getTemplateid();
			String param = msgReg.getParam();
			String uid = msgReg.getUid();
			String mobile = msgReg.getMobile();
			String result=InstantiationRestAPI().sendSms(sid, token, appid, templateid, param, mobile, uid);
			System.out.println("Response content is: " + result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}


	public MsgSendUtil initializeData(String sid, String token, String appid, String templateid, String param, String mobile,
			String uid) {
		msgReg=new MsgReg();
		msgReg.setSid(sid);
		msgReg.setToken(token);
		msgReg.setAppid(appid);
		msgReg.setParam(param);
		msgReg.setTemplateid(templateid);
		msgReg.setUid(uid);
		msgReg.setMobile(mobile);
		return this;
	}
	
	public void destroyData(){
		if (null!=msgReg) {
			msgReg=null;
			
		}
	}
}
