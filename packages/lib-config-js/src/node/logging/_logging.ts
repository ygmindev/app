import {
  type _LoggingConfigModel,
  type LoggingConfigModel,
} from '@lib/config/node/logging/logging.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const _logging = ({
  context,
  level,
  transports = [],
}: LoggingConfigModel): _LoggingConfigModel => ({
  level,

  mixin: context,

  transport: {
    targets: filterNil([
      {
        options: { colorize: true, destination: 1 },
        target: 'pino-pretty',
      },

      ...transports,
    ]),
  },
});
