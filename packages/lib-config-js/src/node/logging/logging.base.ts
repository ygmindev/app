import { _logging } from '@lib/config/node/logging/_logging';
import {
  type _LoggingConfigModel,
  type LoggingConfigModel,
} from '@lib/config/node/logging/logging.models';
import { Config } from '@lib/config/utils/Config/Config';
import { LOGGING_LEVEL } from '@lib/shared/logging/logging.constants';

export const loggingConfig = new Config<LoggingConfigModel, _LoggingConfigModel>({
  config: _logging,

  params: () => ({
    level: process.env.NODE_ENV === 'production' ? LOGGING_LEVEL.INFO : LOGGING_LEVEL.DEBUG,
  }),
});
