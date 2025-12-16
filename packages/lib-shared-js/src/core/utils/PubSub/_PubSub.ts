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
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  AckPolicy,
  type Codec,
  connect,
  DeliverPolicy,
  JSONCodec,
  type NatsConnection,
  type NatsError,
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
    if (this._config.retention) {
      const js = await this._client.jetstreamManager();
      const { maxAge, maxRows, maxSize, nReplicas, name, prefixes } = this._config.retention;
      const subjects = prefixes.map((v) => `${v}.*`);
      try {
        const info = await js.streams.info(name);
        await js.streams.update(name, {
          ...info.config,
          subjects,
        });
      } catch (error) {
        if ((error as NatsError).code === '404') {
          await js.streams.add({
            max_age: maxAge * 1e6,
            max_bytes: maxSize,
            max_msgs: maxRows,
            name,
            num_replicas: nReplicas,
            retention: RetentionPolicy.Limits,
            storage: StorageType.File,
            subjects,
          });
        } else {
          throw error;
        }
      }
    }
  }

  async publish<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    data?: TType[TKey],
  ): Promise<void> {
    try {
      if (this.isRetention(topic)) {
        const js = this._client.jetstream();
        await js.publish(topic, this._codec.encode(data));
      } else {
        this._client.publish(topic, this._codec.encode(data));
      }
    } catch (error) {
      logger.error(error);
    }
  }

  async subscribe<TKey extends StringKeyModel<TType>>(
    topic: TKey,
  ): Promise<AsyncIterableIterator<TType[TKey]>> {
    const codec = this._codec;
    if (this._config.retention && this.isRetention(topic)) {
      const js = this._client.jetstream();
      const jsm = await js.jetstreamManager();
      const { name } = this._config.retention;
      const consumer = await jsm.consumers.add(name, {
        ack_policy: AckPolicy.Explicit,
        deliver_policy: DeliverPolicy.All,
        durable_name: undefined,
        filter_subject: topic,
      });
      if (consumer) {
        const handle = await js?.consumers.get(name, consumer.name);
        const subscription = await handle?.consume();
        if (subscription) {
          return (async function* () {
            for await (const v of subscription) {
              try {
                yield codec.decode(v.data) as TType[TKey];
                v.ack();
              } catch {
                v.term();
              }
            }
          })();
        }
      }
      throw new NotFoundError(name);
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
