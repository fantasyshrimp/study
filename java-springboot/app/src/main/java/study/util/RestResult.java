package study.util;

public class RestResult {
  private String status;
  private String errcode;
  private Object data;

  public String getStatus() {
    return status;
  }
  public RestResult setStatus(String status) {
    this.status = status;

    return this;
  }
  public String getErrcode() {
    return errcode;
  }
  public RestResult setErrcode(String errcode) {
    this.errcode = errcode;

    return this;
  }
  public Object getData() {
    return data;
  }
  public RestResult setData(Object data) {
    this.data = data;

    return this;
  }
}
