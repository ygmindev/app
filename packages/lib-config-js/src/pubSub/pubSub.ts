import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromTemp } from '@lib/backend/file/utils/fromTemp/fromTemp';
import { pubSubConfig as configBase } from '@lib/config/pubSub/pubSub.base';
import { LOG_MESSAGE_RESOURCE_NAME } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { Container } from '@lib/shared/core/utils/Container/Container';
import toNumber from 'lodash/toNumber';

let bundleConfig = configBase;

bundleConfig = bundleConfig.extend(() => {
  const environment = Container.get(Environment);

  return {
    command: (config) => {
      let command = `nats-server -js`;
      config.retention && (command = `${command} -sd ${config.retention.dirname}`);
      config.host && (command = `${command} -a ${config.host}`);
      config.port && (command = `${command} -p ${config.port}`);
      return command;
    },

    host: environment.variables.SERVER_PUBSUB_HOST,

    port: environment.variables.SERVER_PUBSUB_PORT
      ? toNumber(environment.variables.SERVER_PUBSUB_PORT)
      : undefined,

    retention: {
      dirname: fromTemp('pubSub'),
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      maxRows: 1000,
      maxSize: 10 * 1e6, // 10MB
      nReplicas: 1,
      name: LOG_MESSAGE_RESOURCE_NAME,
      prefixes: [LOG_MESSAGE_RESOURCE_NAME],
    },
  };
});

export { bundleConfig };
