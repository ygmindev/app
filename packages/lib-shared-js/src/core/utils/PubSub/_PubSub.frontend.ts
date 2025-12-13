import { type RootPubSubSchemaModel } from '@lib/config/pubSub/pubSub.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import {
  type _PubSubModel,
  type _PubSubParamsModel,
} from '@lib/shared/core/utils/PubSub/_PubSub.models';
import { type PubSubSchemaModel } from '@lib/shared/core/utils/PubSub/PubSub.models';
import mitt, { type Emitter } from 'mitt';

export class _PubSub<
  TType extends PubSubSchemaModel = RootPubSubSchemaModel,
> implements _PubSubModel<TType> {
  protected emitter: Emitter<Record<string, unknown>>;

  constructor(params: _PubSubParamsModel) {
    this.emitter = mitt();
  }

  async close(): Promise<void> {
    this.emitter.all.clear();
  }

  async connect(): Promise<void> {
    return Promise.resolve();
  }

  publish<TKey extends StringKeyModel<TType>>(topic: TKey, data?: TType[TKey]): void {
    this.emitter.emit(topic, data);
  }

  async subscribeTopic<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    handler: (data?: TType[TKey]) => void,
  ): Promise<() => void> {
    const handle: (data?: unknown) => void = (data) => handler(data as TType[TKey]);
    this.emitter.on(topic, handle);
    return () => this.emitter.off(topic, handle);
  }
}
