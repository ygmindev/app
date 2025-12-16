import { _pubSub } from '@lib/config/pubSub/_pubSub';
import { type _PubSubConfigModel, type PubSubConfigModel } from '@lib/config/pubSub/pubSub.models';
import { Config } from '@lib/config/utils/Config/Config';

export const pubSubConfig = new Config<PubSubConfigModel, _PubSubConfigModel>({
  config: _pubSub,

  params: () => ({ timeout: 30000 }),
});
