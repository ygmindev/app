import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { loggingConfig } from '@lib/config/node/logging/logging';
import { LOG_MESSAGE_TYPE } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { _Logger } from '@lib/shared/logging/utils/Logger/_Logger';
import { LogArgsModel, type LoggerModel } from '@lib/shared/logging/utils/Logger/Logger.models';

@withContainer()
export class Logger extends _Logger implements LoggerModel {
  constructor() {
    super(loggingConfig.config());
  }

  fail = (params: LogArgsModel, ...rest: Array<LogArgsModel>): void =>
    this.error({ type: LOG_MESSAGE_TYPE.FAIL }, `❌ ${params as string}`, ...rest);

  progress = (params: LogArgsModel, ...rest: Array<LogArgsModel>): void =>
    this.debug(`🕑 ${params as string}`, ...rest);

  success = (params: LogArgsModel, ...rest: Array<LogArgsModel>): void =>
    this.info({ type: LOG_MESSAGE_TYPE.SUCCESS }, `✅ ${params as string}`, ...rest);
}

export const logger: LoggerModel = {
  debug: (params: LogArgsModel) => Container.get(Logger).debug(params),
  error: (params: LogArgsModel) => Container.get(Logger).error(params),
  fail: (params: LogArgsModel) => Container.get(Logger).fail(params),
  info: (params: LogArgsModel) => Container.get(Logger).info(params),
  progress: (params: LogArgsModel) => Container.get(Logger).progress(params),
  success: (params: LogArgsModel) => Container.get(Logger).success(params),
  trace: (params: LogArgsModel) => Container.get(Logger).trace(params),
  warn: (params: LogArgsModel) => Container.get(Logger).warn(params),
};
