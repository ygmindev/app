import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type _PubSubModel } from '@lib/shared/core/utils/PubSub/_PubSub.models';
import {
  type PubSubSchemaModel,
  type SubscribeParamsModel,
} from '@lib/shared/core/utils/PubSub/PubSub.models';
import mitt, { type Emitter } from 'mitt';

export class _PubSub<TType extends PubSubSchemaModel> implements _PubSubModel<TType> {
  protected emitter: Emitter<Record<string, unknown>>;

  constructor() {
    this.emitter = mitt();
  }

  close(): void {
    this.emitter.all.clear();
  }

  publish<TKey extends StringKeyModel<TType>>({
    data,
    topic,
    topicId,
  }: SubscribeParamsModel<TType, TKey> & { data: TType[TKey] }): void {
    this.emitter.emit(topicId ? `${topic}.${topicId}` : topic, data);
  }

  subscribeSync<TKey extends StringKeyModel<TType>>(
    { topic, topicId }: SubscribeParamsModel<TType, TKey>,
    handler: (params: TType[TKey]) => void,
  ): void {
    this.emitter.on(topicId ? `${topic}.${topicId}` : topic, (data) =>
      handler(data as TType[TKey]),
    );
  }

  unsubscribe<TKey extends StringKeyModel<TType>>({
    topic,
    topicId,
  }: SubscribeParamsModel<TType, TKey>): void {
    this.emitter.off(topicId ? `${topic}.${topicId}` : topic);
  }
}
