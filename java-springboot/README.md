# 프로젝트 init

### gradle init
##### working directory
$ gradle init
> application / Java / no / Groovy / no / JUnit 4 <br/>
> Project name : study <br/>
> Source package : study.app <br/>

### Spring Quickstart (참고 : https://spring.io/quickstart)
##### https://start.spring.io/ 접속

Project : Gradle - Groovy
Language : Java
Spring Boot : 3.1.0
Project Metadata :
> Group : study <br/>
> Artifact : app <br/>
> Name : app <br/>
> Description : fs' study <br/>
> Package name : study.app <br/>
> Packaging : Jar <br/>
> Java : 17 <br/>
Dependencies : 
> Spring Boot DevTools, <br/>
> Spring Configuration Processor, <br/>
> Lombok, <br/>
> Spring Web, <br/>
> JDBC API, <br/>
> MyBatis Framework <br/>
> MariaDB Driver <br/>
	
##### EXPLORE (CTRL + SPACE) 선택
> 파일(.gitignore, build.gradle, settings.gradle, App.java) 및  <br/>
> 작업 디렉토리 구조 확인 <br/>
- 각각의 파일의 내용을 추가 및 변경하고 폴더 및 파일을 생성하여 디렉토리 구조를 맞추어도 되지만 다운로드도 가능하다. ( 다운로드 시 gradle init 생략 가능 )

##### tomcat -> undertow 서버 변경
build.gradle -  
```implementation 'org.springframework.boot:spring-boot-starter-web'```
아래로 변경
```
implementation ('org.springframework.boot:spring-boot-starter-web') {
exclude group: 'org.springframework.boot', module: 'spring-boot-starter-tomcat'
}
implementation 'org.springframework.boot:spring-boot-starter-undertow'
```
### 작업 환경 설정
##### build.gradle -
```sourceCompatibility = '17'```
아래로 변경 ( CLI환경에서 'build'작업 수행 설정 )
```
tasks.withType(JavaCompile) {
options.encoding = 'UTF-8' 
sourceCompatibility = '17'
targetCompatibility = '17'
}
```
##### application.properties
- 포트번호 설정
```server.port=8080```
 - url 설정
```server.servlet.context-path=/study```

- Database 설정 ( mariadb )
```
spring.datasource.driver-class-name=org.mariadb.jdbc.Driver
spring.datasource.url=jdbc:mariadb://localhost:3306/study
spring.datasource.username=study
spring.datasource.password=1111
```
- 멀티파트 파일 설정
```
spring.servlet.multipart.max-file-size=20MB
spring.servlet.multipart.max-request-size=200MB
```

### IDE 설정
##### eclipse 
> build.gradle -  <br/>
> 아래 내용 추가
```
plugins {
  id 'eclipse'
}
eclipse {
  project {
    name = "study-app"
  }
  jdt {  
    sourceCompatibility = 17
    targetCompatibility = 17
    javaRuntimeName = "JavaSE-17"
  }
}
```
> $ gradle eclipse  <br/>
> eclipse에서 import -> next -> 폴더 선택  <br/>