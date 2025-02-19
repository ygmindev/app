import { type StringKeyModel } from '@lib/shared/core/core.models';
import { TimeoutError } from '@lib/shared/core/errors/TimeoutError/TimeoutError';
import { _PubSub } from '@lib/shared/core/utils/PubSub/_PubSub';
import { type PubSubSchemaModel } from '@lib/shared/core/utils/PubSub/PubSub.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export class PubSub<TType extends PubSubSchemaModel> extends _PubSub<TType> {
  waitFor<TKey extends StringKeyModel<TType>>(
    topic: TKey,
    timeout?: number,
  ): Promise<TType[TKey] | undefined> {
    return new Promise((resolve, reject) => {
      timeout &&
        void sleep(timeout).then(() => {
          this.unsubscribe(topic);
          reject(new TimeoutError(topic, timeout));
        });

      this.subscribeSync(topic, (params) => {
        this.unsubscribe(topic);
        resolve(params ?? undefined);
      });
    });
  }

  subscribe<TKey extends StringKeyModel<TType>>(topic: TKey): AsyncIterator<TType[TKey]> {
    const { subscribeSync } = this;
    async function* stream(): AsyncGenerator<TType[TKey]> {
      let results: Array<TType[TKey]> = [];
      let resolve: (value?: unknown) => void;
      let promise = new Promise((r) => (resolve = r));
      const done = false;
      subscribeSync(topic, (params) => {
        results = results.concat(params);
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
