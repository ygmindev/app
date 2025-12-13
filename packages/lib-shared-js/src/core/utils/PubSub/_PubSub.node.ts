import { pubSubConfig } from '@lib/config/pubSub/pubSub';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type _PubSubModel } from '@lib/shared/core/utils/PubSub/_PubSub.models';
import { type PubSubSchemaModel } from '@lib/shared/core/utils/PubSub/PubSub.models';
import { type Codec, connect, JSONCodec, type NatsConnection, type Subscription } from 'nats';

export class _PubSub<TType extends PubSubSchemaModel> implements _PubSubModel<TType> {
  protected _client!: NatsConnection;
  protected _codec!: Codec<unknown>;
  protected _subscriptions!: Map<string, Subscription>;

  constructor() {
    this._codec = JSONCodec();
    this._subscriptions = new Map();
  }

  async close(): Promise<void> {
    await this._client.close();
    await this._client.closed();
  }

  async connect(): Promise<void> {
    this._client = await connect(pubSubConfig.config());
  }

  publish<TKey extends StringKeyModel<TType>>(topic: TKey, data?: TType[TKey]): void {
    this._client.publish(topic, this._codec.encode(data));
  }

  async subscribe<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    handler: (data?: TType[TKey]) => void,
  ): Promise<void> {
    const sub = this._client.subscribe(topic);
    this._subscriptions.set(topic, sub);
    for await (const v of sub) {
      handler(this._codec.decode(v.data) as TType[TKey]);
    }
  }

  async unsubscribe<TKey extends StringKeyModel<TType>>(topic?: TKey): Promise<void> {
    await (topic ? this._client.drain() : this._subscriptions.get(topic as TKey)?.drain());
  }
}
