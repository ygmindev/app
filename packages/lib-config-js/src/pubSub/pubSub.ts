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
      command: (config) => `nats-server -js -a ${config.host} -p ${config.port}`,

      host: environment.variables.SERVER_PUBSUB_HOST ?? 'localhost',

      port: toNumber(environment.variables.SERVER_PUBSUB_PORT),
    };
  },
});
