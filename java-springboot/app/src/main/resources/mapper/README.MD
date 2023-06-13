# MAPPER FILE 설정
### mybatis
> Dao클래스의 메소드 실행 시 Dao.xml파일과 연동하여 sql문을 실행할 수 있다.
> application.properties -  <br/>
```#mybatis
mybatis.type-aliases-package=study.app.vo
mybatis.mapper-locations=/mapper/**/*.xml
```
--- 위의 경우 mapper파일의 경로는 resources/mapper/하위의 모든 .xml


> SampleVo 예시
```
package study.app.vo;

import java.sql.Date;
import lombok.Data;

@Data
public class SampleVo {
  int no;
  String param1;
  String param2;
  Date date;
}
```

> SampleVoDao 예시
```
package study.app.dao;

import org.apache.ibatis.annotations.Mapper;
import study.app.vo.SampleVo;

@Mapper
public interface SampleVoDao {
  void insert(SampleVo vo);
}
```

> SampleVoDao.xml mapper파일 예시
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
  PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
  "https://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="study.app.dao.SampleVoDao">

	<resultMap type="SampleVo" id="SampleVoMap">
	  <id column="no" property="no" />
    <result column="col1" property="param1" />
	  <result column="col2" property="param2" />
	  <result column="dt" property="date" />
	</resultMap>

  <insert id="insert" parameterType="SampleVo">
    insert into table_name(col1, col2)
    values (#{param1}, #{param2})
  </insert>

</mapper>
```
--- no : 자동증가, dt : default=now()