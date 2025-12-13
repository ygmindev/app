import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type PubSubSchemaModel } from '@lib/shared/core/utils/PubSub/PubSub.models';

export type _PubSubModel<TType extends PubSubSchemaModel> = {
  close(): Promise<void>;

  connect(): Promise<void>;

  publish<TKey extends StringKeyModel<TType>>(topic: TKey, data?: TType[TKey]): void;

  subscribe<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    handler: (data?: TType[TKey]) => void,
  ): Promise<void>;

  unsubscribe<TKey extends StringKeyModel<TType>>(topic: TKey): Promise<void>;
};
