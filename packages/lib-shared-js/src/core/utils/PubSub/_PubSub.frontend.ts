import { type RootPubSubSchemaModel } from '@lib/config/pubSub/pubSub.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { AsyncQueue } from '@lib/shared/core/utils/AsyncQueue/AsyncQueue';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';
import {
  type _PubSubModel,
  type _PubSubParamsModel,
} from '@lib/shared/core/utils/PubSub/_PubSub.models';
import mitt, { type Emitter } from 'mitt';

export class _PubSub<TType extends Record<string, unknown> = RootPubSubSchemaModel>
  extends Bootstrappable
  implements _PubSubModel<TType>
{
  protected emitter: Emitter<TType>;

  constructor(params: _PubSubParamsModel) {
    super();
    this.emitter = mitt();
  }

  async onCleanUp(): Promise<void> {
    this.emitter.all.clear();
  }

  async publish<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    data?: TType[TKey],
  ): Promise<void> {
    data && this.emitter.emit(topic, data);
  }

  async subscribe<TKey extends StringKeyModel<TType>>(
    topic: TKey,
  ): Promise<AsyncIterableIterator<TType[TKey]>> {
    const queue = new AsyncQueue<TType[TKey]>();
    const handler = (payload: unknown): void => {
      queue.push(payload as TType[TKey]);
    };
    this.emitter.on(topic, handler);
    queue.return = async () => {
      this.emitter.off(topic, handler);
      queue.stop();
      return { done: true, value: undefined };
    };
    return queue;
  }
}
