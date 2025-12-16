import { _pubSub } from '@lib/config/pubSub/_pubSub';
import { type RootPubSubSchemaModel } from '@lib/config/pubSub/pubSub.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { type AsyncQueue } from '@lib/shared/core/utils/AsyncQueue/AsyncQueue';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';
import {
  type _PubSubModel,
  type _PubSubParamsModel,
} from '@lib/shared/core/utils/PubSub/_PubSub.models';
import {
  AckPolicy,
  type Codec,
  connect,
  DeliverPolicy,
  type JetStreamManager,
  JSONCodec,
  type NatsConnection,
  RetentionPolicy,
  StorageType,
} from 'nats';

export class _PubSub<TType extends Record<string, unknown> = RootPubSubSchemaModel>
  extends Bootstrappable
  implements _PubSubModel<TType>
{
  protected _client!: NatsConnection;
  protected _codec!: Codec<unknown>;
  protected _config!: _PubSubParamsModel;
  protected _jetstream?: JetStreamManager;
  protected _subscriptions!: Map<string, Set<AsyncQueue<TType>>>;

  constructor(params: _PubSubParamsModel) {
    super();
    this._codec = JSONCodec();
    this._config = params;
    this._subscriptions = new Map<string, Set<AsyncQueue<TType>>>();
  }

  isRetention(topic: string): boolean {
    const { prefixes } = this._config.retention ?? {};
    return !!(prefixes && prefixes.some((v) => topic.startsWith(v)));
  }

  async onCleanUp(): Promise<void> {
    await this._client.close();
    await this._client.closed();
  }

  async onInitialize(): Promise<void> {
    this._client = await connect(_pubSub(this._config));
    this._jetstream = await this._client.jetstreamManager();
    if (this._config.retention) {
      const { maxAge, maxRows, maxSize, nReplicas, name, prefixes } = this._config.retention;
      await this._jetstream.streams.add({
        max_age: maxAge,
        max_bytes: maxSize,
        max_msgs: maxRows,
        name,
        num_replicas: nReplicas,
        retention: RetentionPolicy.Workqueue,
        storage: StorageType.File,
        subjects: prefixes.map((v) => `${v}:*`),
      });
    }
  }

  publish<TKey extends StringKeyModel<TType>>(topic: TKey, data?: TType[TKey]): void {
    if (this.isRetention(topic)) {
      void this._jetstream?.jetstream().publish(topic, this._codec.encode(data));
    } else {
      this._client.publish(topic, this._codec.encode(data));
    }
  }

  async subscribe<TKey extends StringKeyModel<TType>>(
    topic: TKey,
  ): Promise<AsyncIterableIterator<TType[TKey]>> {
    const codec = this._codec;

    if (this._config.retention && this.isRetention(topic)) {
      const { name } = this._config.retention;
      await this._jetstream?.consumers.add(name, {
        ack_policy: AckPolicy.Explicit,
        deliver_policy: DeliverPolicy.All,
        filter_subject: topic,
      });
      const consumer = await this._jetstream?.jetstream().consumers.get(name);
      const subscription = await consumer?.consume();
      if (subscription) {
        return (async function* () {
          for await (const v of subscription) {
            try {
              const data = codec.decode(v.data) as TType[TKey];
              v.ack();
              yield data;
            } catch (error) {
              v.term();
            }
          }
        })();
      }
      throw new NotFoundError(`consumer ${name}`);
    } else {
      const subscription = this._client.subscribe(topic);
      return (async function* () {
        try {
          for await (const v of subscription) {
            yield codec.decode(v.data) as TType[TKey];
          }
        } finally {
          subscription.unsubscribe();
        }
      })();
    }
  }
}
