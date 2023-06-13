package study.app.dao;

import org.apache.ibatis.annotations.Mapper;
import study.app.vo.SimpleChat;

@Mapper
public interface SimpleChatDao {
  void insert(SimpleChat chat);
}
