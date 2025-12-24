import { type PubSubConfigModel } from '@lib/config/pubSub/pubSub.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';

export type _PubSubParamsModel = PubSubConfigModel;

export type _PubSubModel<TType extends Record<string, unknown>> = BootstrappableModel & {
  publish<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    data?: TType[TKey],
    id?: string,
  ): Promise<void>;

  subscribe<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    id?: string,
  ): Promise<AsyncIterableIterator<TType[TKey]>>;
};
