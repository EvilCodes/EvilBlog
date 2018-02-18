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
	    

	    String orginFilename = items_pic.getOriginalFilename();//拿到图片原始名称
	    //上传图片
	    if(items_pic != null && orginFilename != null && orginFilename.length() > 0){
	        //存储图片的物理路径
	        String pic_path = "E:\\BufferedSpace\\BufferPic\\";	
	        //新的图片名称
	        String newFilename = UUID.randomUUID() + orginFilename.substring(orginFilename.lastIndexOf("."));
	        //新的图片
	        File newFile = new File(pic_path + newFilename);
	        
	        //将内存中的数据写入磁盘
	        items_pic.transferTo(newFile);
	        
	        //如果上传成功，要将图片名称写到itemsCustom中
	    }
	    
//	    itemsService.updateItems(id, itemsCustom);
	    
	    //我们也可以不使用注解，而直接使用model将pojo数据回显到页面
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
