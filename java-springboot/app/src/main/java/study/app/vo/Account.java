package study.app.vo;

import java.sql.Date;
import lombok.Data;

@Data
public class Account {
  int no;
  String email;
  String password;
  Date createdDate;
}
