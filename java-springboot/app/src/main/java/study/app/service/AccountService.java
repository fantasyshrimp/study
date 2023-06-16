package study.app.service;

import study.app.vo.Account;

public interface AccountService {
  int checkDuplication(String email);
  int checkPassword(Account account);
}
