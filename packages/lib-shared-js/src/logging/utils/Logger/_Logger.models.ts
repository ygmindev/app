export type _LoggerParamsModel = {
  level?: keyof _LoggerModel;
};

export type _LoggerModel = {
  debug: _LogModel;
  error: _LogModel;
  info: _LogModel;
  trace: _LogModel;
  warn: _LogModel;
};

export type _LogModel = (...params: Array<string>) => void;
