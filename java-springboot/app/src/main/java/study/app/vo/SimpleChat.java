package study.app.vo;

import java.sql.Date;
import lombok.Data;

@Data
public class SimpleChat {
  int no;
  String name;
  String message;
  Date sendDate;
}
