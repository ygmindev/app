import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type PubSubSchemaModel } from '@lib/shared/core/utils/PubSub/PubSub.models';

export type _PubSubModel<TType extends PubSubSchemaModel> = {
  close(): void;
  publish<TKey extends StringKeyModel<TType>>(topic: TKey, ...params: TType[TKey]): void;
  subscribeSync<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    handler: (params: TType[TKey]) => void,
  ): void;
  unsubscribe<TKey extends StringKeyModel<TType>>(topic: TKey): void;
};
