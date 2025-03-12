import { type StringKeyModel } from '@lib/shared/core/core.models';
import { TimeoutError } from '@lib/shared/core/errors/TimeoutError/TimeoutError';
import { _PubSub } from '@lib/shared/core/utils/PubSub/_PubSub';
import {
  type PubSubSchemaModel,
  type SubscribeParamsModel,
} from '@lib/shared/core/utils/PubSub/PubSub.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export class PubSub<TType extends PubSubSchemaModel> extends _PubSub<TType> {
  waitFor<TKey extends StringKeyModel<TType>>(
    { topic, topicId }: SubscribeParamsModel<TType, TKey>,
    timeout?: number,
  ): Promise<TType[TKey] | undefined> {
    return new Promise((resolve, reject) => {
      timeout &&
        void sleep(timeout).then(() => {
          this.unsubscribe({ topic, topicId });
          reject(new TimeoutError(topicId ? `${topic}-${topicId}` : topic, timeout));
        });

      this.subscribeSync({ topic, topicId }, (data) => {
        this.unsubscribe({ topic, topicId });
        resolve(data ?? undefined);
      });
    });
  }

  subscribe<TKey extends StringKeyModel<TType>>({
    topic,
    topicId,
  }: SubscribeParamsModel<TType, TKey>): AsyncIterator<TType[TKey]> {
    const { subscribeSync } = this;
    async function* stream(): AsyncGenerator<TType[TKey]> {
      let results: Array<TType[TKey]> = [];
      let resolve: (value?: unknown) => void;
      let promise = new Promise((r) => (resolve = r));
      const done = false;
      subscribeSync({ topic, topicId }, (data) => {
        results = results.concat(data);
        resolve();
        promise = new Promise((r) => (resolve = r));
      });

      while (!done) {
        await promise;
        yield* results;
        results = [];
      }
    }
    return stream();
  }
}
