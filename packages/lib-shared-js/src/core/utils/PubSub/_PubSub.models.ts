import {
  type PubSubConfigModel,
  type RootPubSubSchemaModel,
} from '@lib/config/pubSub/pubSub.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';

export type _PubSubParamsModel = PubSubConfigModel;

export type _PubSubModel<TType extends Record<string, unknown> = RootPubSubSchemaModel> =
  BootstrappableModel & {
    publish<TKey extends StringKeyModel<TType>>(topic: TKey, data?: TType[TKey]): void;

    subscribe<TKey extends StringKeyModel<TType>>(
      topic: TKey,
    ): Promise<AsyncIterableIterator<TType[TKey]>>;
  };
