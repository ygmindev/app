import { LocalStorage } from '@lib/backend/core/utils/LocalStorage/LocalStorage';
import { type LocalContextModel } from '@lib/backend/core/utils/LocalStorage/LocalStorage.models';
import { fromBuild } from '@lib/backend/file/utils/fromBuild/fromBuild';
import { loggingConfig as configBase } from '@lib/config/node/logging/logging.base';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

let loggingConfig = configBase;

loggingConfig = loggingConfig.extend(() => ({
  context: () => Container.get(LocalStorage).get() as LocalContextModel,

  transports: filterNil([
    process.env.__WORKFLOW__ === 'true' && {
      options: {},
      target: fromBuild('orchestrator.transport.js'),
    },
  ]),
}));

export { loggingConfig };
