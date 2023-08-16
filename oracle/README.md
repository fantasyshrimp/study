### Oracle 11g express edition
https://www.oracle.com/database/technologies/xe-prior-release-downloads.html

위의 url에서 zip파일 다운로드 후 압축해제
setup파일 실행 후 next -> 비밀번호 설정

설치확인 cmd
sqlplus
id : system
pw : 설정한 비밀번호

###### scott 계정 추가
system 계정으로 로그인 후
@C:\oraclexe\app\oracle\product\11.2.0\server\rdbms\admin\scott.sql
setup파일이 있는 디렉토리가 아닌 setup 후 생성되는 oraclexe폴더

alter user scott identified by tiger;
? 권한이 없다면
conn system/pw <로 system으로 로그인 후 위의 명령 실행

### SQL Developer
https://www.oracle.com/database/sqldeveloper/technologies/download/

위의 url에서 zip파일 다운로드 후 압축해제
sqldeveloper.exe 파일 실행 후 설치된 디렉토리로 설정

호스트이름 : ip
포트 : 기본 1521 (db에 따라 포트번호 설정)

scott/tiger 접속 테스트

select * from emp;