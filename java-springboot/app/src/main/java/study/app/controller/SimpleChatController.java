package study.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import study.app.service.SimpleChatService;
import study.app.vo.SimpleChat;
import study.util.RestResult;

@RestController
@RequestMapping("/simpleChat")
public class SimpleChatController {

  @Autowired private SimpleChatService simpleChatService;

  @PostMapping()
  public Object send(@RequestBody SimpleChat chat) {
    SimpleChat newChat = simpleChatService.sendMessage(chat);

    return new RestResult()
        .setStatus("success")
        .setData(newChat);
  }


  @GetMapping()
  public Object viewList() {
    return new RestResult()
        .setStatus("success")
        .setData(simpleChatService.viewMessages(10));
  }
}
