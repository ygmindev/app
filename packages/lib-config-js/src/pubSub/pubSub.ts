import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { _pubSub } from '@lib/config/pubSub/_pubSub';
import { type _PubSubConfigModel, type PubSubConfigModel } from '@lib/config/pubSub/pubSub.models';
import { Config } from '@lib/config/utils/Config/Config';
import { Container } from '@lib/shared/core/utils/Container/Container';
import toNumber from 'lodash/toNumber';

export const pubSubConfig = new Config<PubSubConfigModel, _PubSubConfigModel>({
  config: _pubSub,

  params: () => {
    const environment = Container.get(Environment);
    return {
      command: (config) => {
        let command = 'nats-server -js';
        config.host && (command = `${command} -a ${config.host}`);
        config.port && (command = `${command} -p ${config.port}`);
        return command;
      },

      host: environment.variables.SERVER_PUBSUB_HOST,

      port: environment.variables.SERVER_PUBSUB_PORT
        ? toNumber(environment.variables.SERVER_PUBSUB_PORT)
        : undefined,
    };
  },
});
