class HttpException extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

class ParameterException extends HttpException {
  constructor(message = "参数出错", code = 10001) {
    super(message, code);
  }
}
class ForbbidenException extends HttpException {
  constructor(message = "你没有权限访问", code = 10002) {
    super(message, code);
  }
}
class ServerException extends HttpException {
  constructor(message = "服务器内部出错", code = 10005) {
    super(message, code);
  }
}

module.exports = {
  HttpException,
  ParameterException,
  ForbbidenException,
  ServerException,
};
