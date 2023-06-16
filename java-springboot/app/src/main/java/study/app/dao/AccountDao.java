package study.app.dao;

import org.apache.ibatis.annotations.Mapper;
import study.app.vo.Account;

@Mapper
public interface AccountDao {
  int checkEmail(String email);
  int checkPassword(Account account);
}
