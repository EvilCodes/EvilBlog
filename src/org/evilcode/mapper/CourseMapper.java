package org.evilcode.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.evilcode.model.pojo.Course;

public interface CourseMapper {
	
	@Select("select * from t_course")
	List<Course> getCourses();

}
