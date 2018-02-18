package org.evilcode.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.evilcode.model.pojo.TechCategory;
import org.evilcode.model.service.IThemeOperate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class TestController {
	@Autowired
	IThemeOperate iThemeOperate;
	
	@RequestMapping("/editItemsSubmit")
	public String editItemsSubmit(
	        MultipartFile items_pic) throws Exception {
	    

	    String orginFilename = items_pic.getOriginalFilename();//�õ�ͼƬԭʼ����
	    //�ϴ�ͼƬ
	    if(items_pic != null && orginFilename != null && orginFilename.length() > 0){
	        //�洢ͼƬ������·��
	        String pic_path = "E:\\BufferedSpace\\BufferPic\\";	
	        //�µ�ͼƬ����
	        String newFilename = UUID.randomUUID() + orginFilename.substring(orginFilename.lastIndexOf("."));
	        //�µ�ͼƬ
	        File newFile = new File(pic_path + newFilename);
	        
	        //���ڴ��е�����д�����
	        items_pic.transferTo(newFile);
	        
	        //����ϴ��ɹ���Ҫ��ͼƬ����д��itemsCustom��
	    }
	    
//	    itemsService.updateItems(id, itemsCustom);
	    
	    //����Ҳ���Բ�ʹ��ע�⣬��ֱ��ʹ��model��pojo���ݻ��Ե�ҳ��
	    //model.addAttribute("items", itemsCustom);
	    //model.addAttribute("id", id);
	    
//	    return "forward:queryItems.action";
	    return null;
	}
	
	@RequestMapping("/test")
	public void getAllTechTabs(){
		ArrayList<TechCategory> list = iThemeOperate.getAllData();
		for (TechCategory techCategory : list) {
			System.out.println(techCategory.getName());
			
		}
		
	}
	


}
