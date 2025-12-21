import { LocalStorage } from '@lib/backend/core/utils/LocalStorage/LocalStorage';
import { type LocalContextModel } from '@lib/backend/core/utils/LocalStorage/LocalStorage.models';
import { fromBuild } from '@lib/backend/file/utils/fromBuild/fromBuild';
import { loggingConfig as configBase } from '@lib/config/node/logging/logging.base';
import { LOG_MESSAGE_RESOURCE_NAME } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { Container } from '@lib/shared/core/utils/Container/Container';

let loggingConfig = configBase;

loggingConfig = loggingConfig.extend(() => ({
  context: () => Container.get(LocalStorage).get() as LocalContextModel,

  transports: [
    {
      options: { topic: LOG_MESSAGE_RESOURCE_NAME },
      target: fromBuild('orchestrator.transport.js'),
    },
  ],
}));

export { loggingConfig };
