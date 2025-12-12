export type LoggerModel = {
  debug: LogModel;
  error: LogModel;
  fail: LogModel;
  info: LogModel;
  progress: LogModel;
  success: LogModel;
  trace: LogModel;
  warn: LogModel;
};

export type LogModel = (...params: Array<unknown>) => void;
