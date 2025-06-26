import { _ConcurrentQueue } from '@lib/shared/core/utils/ConcurrentQueue/_ConcurrentQueue';
import {
  type ConcurrentQueueModel,
  type ConcurrentQueueParamsModel,
} from '@lib/shared/core/utils/ConcurrentQueue/ConcurrentQueue.models';

export class ConcurrentQueue extends _ConcurrentQueue implements ConcurrentQueueModel {
  constructor({ interval, maxConcurrency = Infinity }: ConcurrentQueueParamsModel = {}) {
    super({ interval, maxConcurrency });
  }
}
