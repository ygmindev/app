import {
  type _LoggerModel,
  type _LoggerParamsModel,
  type _LogModel,
} from '@lib/shared/logging/utils/Logger/_Logger.models';

export class _Logger implements _LoggerModel {
  constructor(params: _LoggerParamsModel) {}

  debug: _LogModel = (args) => console.debug(args);
  error: _LogModel = (args) => console.error(args);
  info: _LogModel = (args) => console.info(args);
  trace: _LogModel = (args) => console.trace(args);
  warn: _LogModel = (args) => console.warn(args);
}
