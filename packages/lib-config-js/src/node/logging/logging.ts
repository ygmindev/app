import { LocalStorage } from '@lib/backend/core/utils/LocalStorage/LocalStorage';
import { type LocalContextModel } from '@lib/backend/core/utils/LocalStorage/LocalStorage.models';
import { loggingConfig as configBase } from '@lib/config/node/logging/logging.base';
import { LOG_MESSAGE_RESOURCE_NAME } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let loggingConfig = configBase;

loggingConfig = loggingConfig.extend(() => ({
  context: () => Container.get(LocalStorage).get() as LocalContextModel,

  transports: [
    {
      options: { topic: LOG_MESSAGE_RESOURCE_NAME },
      target: resolve(__dirname, './transports/orchestratorTransport/orchestratorTransport.ts'),
    },
  ],
}));

export { loggingConfig };
