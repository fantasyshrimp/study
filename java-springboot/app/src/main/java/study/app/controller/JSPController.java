package study.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JSPController {

  @GetMapping("/testjsp")
  public Object testjsp() {
    System.out.println("receive testjsp con.");

    return "test";
  }
}
