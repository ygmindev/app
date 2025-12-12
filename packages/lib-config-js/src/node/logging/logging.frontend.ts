import { loggingConfig as configBase } from '@lib/config/node/logging/logging.base';

let loggingConfig = configBase;

loggingConfig = loggingConfig.extend(() => ({}));

export { loggingConfig };
