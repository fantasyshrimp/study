package study.app.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import study.app.vo.SimpleChat;

@Mapper
public interface SimpleChatDao {
  void insert(SimpleChat chat);
  SimpleChat get(SimpleChat chat);
  List<SimpleChat> list(int count);
}
