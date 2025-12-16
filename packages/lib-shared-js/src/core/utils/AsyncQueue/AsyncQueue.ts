import { type AsyncQueueModel } from '@lib/shared/core/utils/AsyncQueue/AsyncQueue.models';

export class AsyncQueue<TType> implements AsyncQueueModel<TType> {
  private _isDone: boolean = false;
  private _queue: Array<TType> = [];
  private _resolvers: Array<(value: IteratorResult<TType>) => void> = [];

  [Symbol.asyncIterator](): AsyncQueueModel<TType> {
    return this;
  }

  async next(): Promise<IteratorResult<TType>> {
    if (this._queue.length) {
      return { done: false, value: this._queue.shift()! };
    }
    if (this._isDone) {
      return { done: true, value: undefined };
    }
    return new Promise<IteratorResult<TType>>((resolve) => {
      this._resolvers.push(resolve);
    });
  }

  push(value: TType): void {
    if (this._isDone) return;
    if (this._resolvers.length) {
      this._resolvers.shift()!({ done: false, value });
    } else {
      this._queue.push(value);
    }
  }

  async return(): Promise<IteratorResult<TType>> {
    this.stop();
    return { done: true, value: undefined };
  }

  stop(): void {
    this._isDone = true;
    for (const resolve of this._resolvers) {
      resolve({ done: true, value: undefined });
    }
    this._resolvers = [];
  }
}
