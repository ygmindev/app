import { type RootPubSubSchemaModel } from '@lib/config/pubSub/pubSub.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type _PubSubModel } from '@lib/shared/core/utils/PubSub/_PubSub.models';

export type PubSubModel<TType extends PubSubSchemaModel = RootPubSubSchemaModel> =
  _PubSubModel<TType> & {
    subscribe<TKey extends StringKeyModel<TType>>(topic: TKey): AsyncIterator<TType[TKey]>;
  };

export type PubSubSchemaModel = {
  [key: string]: unknown;
};
