import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type _PubSubModel } from '@lib/shared/core/utils/PubSub/_PubSub.models';
import { type PubSubSchemaModel } from '@lib/shared/core/utils/PubSub/PubSub.models';
import mitt, { type Emitter } from 'mitt';

export class _PubSub<TType extends PubSubSchemaModel> implements _PubSubModel<TType> {
  protected emitter: Emitter<Record<string, unknown>>;

  constructor() {
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

  async subscribe<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    handler: (data?: TType[TKey]) => void,
  ): Promise<void> {
    this.emitter.on(topic, (data) => handler(data as TType[TKey]));
  }

  async unsubscribe<TKey extends StringKeyModel<TType>>(topic: TKey): Promise<void> {
    this.emitter.off(topic);
  }
}
