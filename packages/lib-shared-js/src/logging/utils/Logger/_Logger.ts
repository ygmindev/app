import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { DATETIME_FORMAT } from '@lib/shared/datetime/utils/DateTime/DateTime.constants';
import {
  type _LoggerModel,
  type _LoggerParamsModel,
} from '@lib/shared/logging/utils/Logger/_Logger.models';
import { type LogArgsModel } from '@lib/shared/logging/utils/Logger/Logger.models';
import log, { type LogLevelDesc } from 'loglevel';
import prefix from 'loglevel-plugin-prefix';

export class _Logger implements _LoggerModel {
  constructor(params: _LoggerParamsModel) {
    prefix.reg(log);
    prefix.apply(log, {
      timestampFormatter: (timestamp: Date) =>
        new DateTime(timestamp).format(DATETIME_FORMAT.DATE_TIME_MS),
    });
    log.setLevel(params.level as LogLevelDesc);
  }

  debug(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    log.debug(params, ...rest);
  }

  error(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    log.error(params, ...rest);
  }

  info(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    log.info(params, ...rest);
  }

  trace(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    log.trace(params, ...rest);
  }

  warn(params: LogArgsModel, ...rest: Array<LogArgsModel>): void {
    log.warn(params, ...rest);
  }
}
