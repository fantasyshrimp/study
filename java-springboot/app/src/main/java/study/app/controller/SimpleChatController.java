package study.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import study.app.service.SimpleChatService;
import study.app.vo.SimpleChat;

@RestController
@RequestMapping("/simpleChat")
public class SimpleChatController {

  @Autowired private SimpleChatService simpleChatService;

  @PostMapping()
  public Object send(@RequestBody SimpleChat chat) {
    simpleChatService.sendMessage(chat);

    return "---chattest---";
  }
}
