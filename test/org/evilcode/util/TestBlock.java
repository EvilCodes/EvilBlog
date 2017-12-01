package org.evilcode.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.evilcode.mapper.ClassMapper;
import org.evilcode.mapper.CourseMapper;
import org.evilcode.model.pojo.Course;
import org.evilcode.model.pojo.User;
import org.junit.Before;
import org.junit.Test;

public class TestBlock {
	private SqlSession sqlSession;
	@Before
	public void init() {
		String resource = "mybatis-config.xml";
		try {
			InputStream inputStream = Resources.getResourceAsStream(resource);
			SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(inputStream);
			sqlSession = factory.openSession();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	@Test
	public void gebilaowang() {
//		User user = sqlSession.selectOne("TestMapper.selectUserById", 1);
//		System.out.println(user.toString());
		CourseMapper mapper = sqlSession.getMapper(CourseMapper.class);
//		User userInfo = mapper.selectUser(1);
		List<Course> courses = mapper.getCourses();
		System.out.println(Arrays.asList(courses));

	}

}
