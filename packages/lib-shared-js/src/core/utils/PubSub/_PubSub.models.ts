import {
  type PubSubConfigModel,
  type RootPubSubSchemaModel,
} from '@lib/config/pubSub/pubSub.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type PubSubSchemaModel } from '@lib/shared/core/utils/PubSub/PubSub.models';

export type _PubSubParamsModel = PubSubConfigModel;

export type _PubSubModel<TType extends PubSubSchemaModel = RootPubSubSchemaModel> = {
  close(): Promise<void>;

  connect(): Promise<void>;

  publish<TKey extends StringKeyModel<TType>>(topic: TKey, data?: TType[TKey]): void;

  subscribeTopic<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    handler: (data?: TType[TKey]) => void,
  ): Promise<() => void>;
};
