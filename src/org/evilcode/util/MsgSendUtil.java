package org.evilcode.util;

import org.evilcode.model.pojo.MsgReg;
/**
 * 
 * @author BlackFox
 * 
 * 和发送短信相关的工具类
 * 	- msgReg:用于存储用户短信验证码以及手机号码相关的数据
 * 	- instance:该工具类的具体实例   
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
