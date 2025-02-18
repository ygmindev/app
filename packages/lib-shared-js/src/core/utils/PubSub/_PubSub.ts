import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type _PubSubModel } from '@lib/shared/core/utils/PubSub/_PubSub.models';
import { type PubSubSchemaModel } from '@lib/shared/core/utils/PubSub/PubSub.models';
import mitt, { type Emitter } from 'mitt';

export class _PubSub<TType extends PubSubSchemaModel> implements _PubSubModel<TType> {
  protected emitter: Emitter<Record<string, unknown>>;

  constructor() {
    this.emitter = mitt();
  }

  close(): void {
    this.emitter.all.clear();
  }

  publish<TKey extends StringKeyModel<TType>>(topic: TKey, ...params: TType[TKey]): void {
    this.emitter.emit(topic, params);
  }

  subscribeSync<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    handler: (...params: TType[TKey]) => void,
  ): void {
    this.emitter.on(topic, (data) => handler(...(data as TType[TKey])));
  }

  unsubscribe<TKey extends StringKeyModel<TType>>(topic: TKey): void {
    this.emitter.off(topic);
  }
}
