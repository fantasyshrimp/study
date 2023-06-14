package study.app.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import study.app.dao.SimpleChatDao;
import study.app.service.SimpleChatService;
import study.app.vo.SimpleChat;

@Service
public class DefaultSimpleChatService implements SimpleChatService{

  @Autowired private SimpleChatDao simpleChatDao;

  @Override
  public SimpleChat sendMessage(SimpleChat chat) {
    simpleChatDao.insert(chat);
    return simpleChatDao.get(chat);
  }

  @Override
  public List<SimpleChat> viewMessages(int count) {
    return simpleChatDao.list(count);
  }

}
