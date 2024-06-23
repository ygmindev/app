import { TimeoutError } from '@lib/shared/core/errors/TimeoutError/TimeoutError';
import { type _PubSubModel } from '@lib/shared/core/utils/PubSub/_PubSub.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import mitt, { type Emitter } from 'mitt';

export class _PubSub implements _PubSubModel {
  protected emitter: Emitter<Record<string, unknown>>;

  constructor() {
    this.emitter = mitt();
  }

  clear(): void {
    this.emitter.all.clear();
  }

  publish<TType extends unknown>(name: string, params: TType): void {
    this.emitter.emit(name, params);
  }

  subscribe<TType extends unknown>(name: string, handler: (params: TType) => void): void {
    this.emitter.on(name, handler as (params: unknown) => void);
  }

  unsubscribe(name: string): void {
    this.emitter.off(name);
  }

  waitFor<TType extends unknown>(name: string, timeout?: number): Promise<TType | null> {
    return new Promise((resolve, reject) => {
      timeout &&
        void sleep(timeout).then(() => {
          this.unsubscribe(name);
          reject(new TimeoutError(name, timeout));
        });
      this.subscribe(name, (params) => {
        this.unsubscribe(name);
        resolve((params as TType) ?? null);
      });
    });
  }
}
