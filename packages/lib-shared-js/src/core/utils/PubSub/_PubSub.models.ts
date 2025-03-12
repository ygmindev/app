import { type StringKeyModel } from '@lib/shared/core/core.models';
import {
  type PubSubSchemaModel,
  type SubscribeParamsModel,
} from '@lib/shared/core/utils/PubSub/PubSub.models';

export type _PubSubModel<TType extends PubSubSchemaModel> = {
  close(): void;
  publish<TKey extends StringKeyModel<TType>>(
    params: SubscribeParamsModel<TType, TKey> & { data: TType[TKey] },
  ): void;
  subscribeSync<TKey extends StringKeyModel<TType>>(
    params: SubscribeParamsModel<TType, TKey>,
    handler: (data: TType[TKey]) => void,
  ): void;
  unsubscribe<TKey extends StringKeyModel<TType>>(params: SubscribeParamsModel<TType, TKey>): void;
};
