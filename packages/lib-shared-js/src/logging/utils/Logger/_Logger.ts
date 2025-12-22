import {
  type _LoggerModel,
  type _LoggerParamsModel,
} from '@lib/shared/logging/utils/Logger/_Logger.models';
import { type LogArgsModel } from '@lib/shared/logging/utils/Logger/Logger.models';

export class _Logger implements _LoggerModel {
  constructor(params: _LoggerParamsModel) {}

  debug(params: LogArgsModel): void {
    console.debug(params);
  }

  error(params: LogArgsModel): void {
    console.error(params);
  }

  fail(params: LogArgsModel): void {
    console.error(params, '❌');
  }

  info(params: LogArgsModel): void {
    console.info(params);
  }

  progress(params: LogArgsModel): void {
    console.info(params, '🕑');
  }

  success(params: LogArgsModel): void {
    console.info(params, '✅');
  }

  trace(params: LogArgsModel): void {
    console.trace(params);
  }

  warn(params: LogArgsModel): void {
    console.warn(params);
  }
}
