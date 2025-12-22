import {
  type _LoggingConfigModel,
  type LoggingConfigModel,
} from '@lib/config/node/logging/logging.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const _logging = ({
  context,
  level,
  levels,
  transports = [],
}: LoggingConfigModel): _LoggingConfigModel => ({
  customLevels: levels,

  level,

  mixin: context,

  transport: {
    targets: filterNil([
      process.env.NODE_ENV === 'development' && {
        options: { colorize: true, destination: 1 },
        target: 'pino-pretty',
      },
      ...transports,
    ]),
  },
});
