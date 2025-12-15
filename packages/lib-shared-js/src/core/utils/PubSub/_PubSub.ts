import { _pubSub } from '@lib/config/pubSub/_pubSub';
import { type RootPubSubSchemaModel } from '@lib/config/pubSub/pubSub.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';
import {
  type _PubSubModel,
  type _PubSubParamsModel,
} from '@lib/shared/core/utils/PubSub/_PubSub.models';
import { type PubSubSchemaModel } from '@lib/shared/core/utils/PubSub/PubSub.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { type Codec, connect, JSONCodec, type NatsConnection, type Subscription } from 'nats';

export class _PubSub<TType extends PubSubSchemaModel = RootPubSubSchemaModel>
  extends Bootstrappable
  implements _PubSubModel<TType>
{
  protected _client!: NatsConnection;
  protected _codec!: Codec<unknown>;
  protected _config!: _PubSubParamsModel;
  protected _subscriptions!: Map<string, Subscription>;

  constructor(params: _PubSubParamsModel) {
    super();
    this._codec = JSONCodec();
    this._config = params;
    this._subscriptions = new Map();
  }

  async onCleanUp(): Promise<void> {
    await this._client.close();
    await this._client.closed();
  }

  async onInitialize(): Promise<void> {
    this._client = await connect(_pubSub(this._config));
  }

  publish<TKey extends StringKeyModel<TType>>(topic: TKey, data?: TType[TKey]): void {
    this._client.publish(topic, this._codec.encode(data));
  }

  async subscribeTopic<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    handler: (data?: TType[TKey]) => void,
  ): Promise<() => void> {
    const sub = this._client.subscribe(topic);
    await this._client.flush();
    this._subscriptions.set(topic, sub);
    (async () => {
      for await (const v of sub) {
        handler(this._codec.decode(v.data) as TType[TKey]);
      }
    })().catch((e) => {
      logger.fail('subscription failed', e);
    });
    await this._client.flush();
    return () => sub.unsubscribe();
  }
}
