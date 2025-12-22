import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { loggingConfig } from '@lib/config/node/logging/logging';
import { _Logger } from '@lib/shared/logging/utils/Logger/_Logger';
import { type LoggerModel } from '@lib/shared/logging/utils/Logger/Logger.models';

@withContainer()
export class Logger extends _Logger implements LoggerModel {
  constructor() {
    super(loggingConfig.config());
  }
}

export const logger: LoggerModel = new Logger();
