import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type _PubSubModel } from '@lib/shared/core/utils/PubSub/_PubSub.models';

export type PubSubModel<TType extends PubSubSchemaModel> = _PubSubModel<TType> & {
  subscribe<TKey extends StringKeyModel<TType>>(topic: TKey): AsyncIterator<TType[TKey]>;
  waitFor<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    timeout?: number,
  ): Promise<TType[TKey] | undefined>;
};

export type PubSubSchemaModel = {
  [key: string]: Array<unknown>;
};
