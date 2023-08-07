package study.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class JSPController {

  @GetMapping("/testjsp")
  public ModelAndView testjsp() {
    System.out.println("receive testjsp con.");
    
    ModelAndView model = new ModelAndView("test");
    
    return model;
  }
}
