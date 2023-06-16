package study.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import study.app.service.AccountService;
import study.app.vo.Account;
import study.util.RestResult;

@RestController
@RequestMapping("/sign")
public class SignController {

  @Autowired AccountService accountService;

  @PostMapping("/in")
  public Object signIn(@RequestBody Account account) {
    if (accountService.checkPassword(account) == 1) {
      return new RestResult().setStatus("success");
    }
    return new RestResult().setStatus("failure");
  }
}
