import { type RootPubSubSchemaModel } from '@lib/config/pubSub/pubSub.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { _PubSub } from '@lib/shared/core/utils/PubSub/_PubSub';
import {
  type PubSubModel,
  type PubSubSchemaModel,
} from '@lib/shared/core/utils/PubSub/PubSub.models';

export class PubSub<TType extends PubSubSchemaModel = RootPubSubSchemaModel>
  extends _PubSub<TType>
  implements PubSubModel<TType>
{
  subscribe<TKey extends StringKeyModel<TType>>(topic: TKey): AsyncIterator<TType[TKey]> {
    let unsubscribe: (() => void) | undefined;
    const queue: Array<TType[TKey]> = [];
    let resolveNext: (() => void) | null = null;

    const unsubscribePromise = this.subscribeTopic(topic, (data) => {
      if (data !== undefined) {
        queue.push(data);
        if (resolveNext) {
          resolveNext();
          resolveNext = null;
        }
      }
    });

    async function* stream(): AsyncGenerator<TType[TKey]> {
      unsubscribe = await unsubscribePromise;
      try {
        while (true) {
          while (queue.length > 0) {
            yield queue.shift()!;
          }
          await new Promise<void>((resolve) => {
            resolveNext = resolve;
          });
        }
      } finally {
        unsubscribe?.();
      }
    }

    return stream();
  }
}
