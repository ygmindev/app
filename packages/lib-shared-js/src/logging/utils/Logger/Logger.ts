import { loggingConfig } from '@lib/config/node/logging/logging';
import { _Logger } from '@lib/shared/logging/utils/Logger/_Logger';
import {
  type LogArgsModel,
  type LoggerModel,
} from '@lib/shared/logging/utils/Logger/Logger.models';

export class Logger extends _Logger implements LoggerModel {
  constructor() {
    super(loggingConfig.config());
  }

  fail = (params: LogArgsModel, ...rest: Array<LogArgsModel>): void =>
    this.error(params, ...rest, '❌');

  progress = (params: LogArgsModel, ...rest: Array<LogArgsModel>): void =>
    this.debug(params, ...rest, '🕑');

  success = (params: LogArgsModel, ...rest: Array<LogArgsModel>): void =>
    this.info(params, ...rest, '✅');
}

export const logger: LoggerModel = new Logger();
