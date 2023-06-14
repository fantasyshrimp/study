package study.app.service;

import java.util.List;
import study.app.vo.SimpleChat;

public interface SimpleChatService {
  SimpleChat sendMessage(SimpleChat chat);
  List<SimpleChat> viewMessages(int count);
}
