package study.app.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import study.app.dao.AccountDao;
import study.app.service.AccountService;
import study.app.vo.Account;

@Service
public class DefaultAccountService implements AccountService{

  @Autowired private AccountDao accountDao;

  @Override
  public int checkDuplication(String email) {
    return accountDao.checkEmail(email);
  }

  @Override
  public int checkPassword(Account account) {
    return accountDao.checkPassword(account);
  }


}
