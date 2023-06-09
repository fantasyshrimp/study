package study.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TmpController {

  @GetMapping("tmp")
  public Object tmpReceive() {
    System.out.println("front의 요청을 받음");

    return "---test---";
  }
}
