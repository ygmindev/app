import {
  type _ConcurrentQueueModel,
  type _ConcurrentQueueParamsModel,
} from '@lib/shared/core/utils/ConcurrentQueue/_ConcurrentQueue.models';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import PQueue from 'p-queue';

export class _ConcurrentQueue implements _ConcurrentQueueModel {
  protected queue: PQueue;

  constructor({ interval, maxConcurrency = Infinity }: _ConcurrentQueueParamsModel = {}) {
    this.queue = new PQueue({
      autoStart: false,
      concurrency: maxConcurrency,
      interval: interval ?? 0,
    });
  }

  clear(): void {
    this.queue.clear();
  }

  add(fn: (() => Promise<void>) | Array<() => Promise<void>>): void {
    isArray(fn) ? void this.queue.addAll(fn) : void this.queue.add(fn);
  }

  run(): Promise<void> {
    this.queue.start();
    return this.queue.onIdle();
  }
}
