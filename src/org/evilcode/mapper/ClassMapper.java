package org.evilcode.mapper;

import org.apache.ibatis.annotations.Many;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.evilcode.model.pojo.User;

public interface ClassMapper {
	
	
	@Select("SELECT * FROM t_user where id=#{id}")
	@Results(
			{
				@Result(id=true,property="id",column="id"),
				@Result(property="username",column="username"),
				@Result(property="email",column="email"),
				@Result(property="pwd",column="pwd"),
				@Result(property="list",column="id",many=@Many(select="org.evilcode.mapper.CourseMapper.getCourses"))
			})
	User selectUser(int id);
	

}