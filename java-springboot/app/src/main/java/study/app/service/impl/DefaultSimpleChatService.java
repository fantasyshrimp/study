package study.app.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import study.app.dao.SimpleChatDao;
import study.app.service.SimpleChatService;
import study.app.vo.SimpleChat;

@Service
public class DefaultSimpleChatService implements SimpleChatService{

  @Autowired private SimpleChatDao simpleChatDao;

  @Override
  public void sendMessage(SimpleChat chat) {
    simpleChatDao.insert(chat);
  }

}
