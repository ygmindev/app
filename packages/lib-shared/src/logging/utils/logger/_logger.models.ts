export interface _LoggerModel {
  _debug(...params: Array<unknown>): void;
  _error(...params: Array<unknown>): void;
  _info(...params: Array<unknown>): void;
  _warn(...params: Array<unknown>): void;
}
