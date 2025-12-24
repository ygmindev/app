import { type RootPubSubSchemaModel } from '@lib/config/pubSub/pubSub.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { AsyncQueue } from '@lib/shared/core/utils/AsyncQueue/AsyncQueue';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
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
    id?: Array<string>,
  ): Promise<void> {
    const topicF = filterNil([topic, ...(id ?? [])]).join('.');
    data && this.emitter.emit(topicF, data);
  }

  async subscribe<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    id?: Array<string>,
  ): Promise<AsyncIterableIterator<TType[TKey]>> {
    const topicF = filterNil([topic, ...(id ?? [])]).join('.');
    const queue = new AsyncQueue<TType[TKey]>();
    const handler = (payload: unknown): void => {
      queue.push(payload as TType[TKey]);
    };
    this.emitter.on(topicF, handler);
    queue.return = async () => {
      this.emitter.off(topicF, handler);
      queue.stop();
      return { done: true, value: undefined };
    };
    return queue;
  }
}
