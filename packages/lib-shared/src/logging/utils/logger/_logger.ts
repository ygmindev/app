import { type _LoggerModel, type _LogModel } from '@lib/shared/logging/utils/Logger/_Logger.models';

export class _Logger implements _LoggerModel {
  debug: _LogModel = console.warn;
  error: _LogModel = console.error;
  info: _LogModel = console.info;
  trace: _LogModel = console.trace;
  warn: _LogModel = console.warn;
}
