import type { CallablePromiseModel } from '#lib-shared/core/core.models';

export interface _DatabaseInMemoryModel {
  start: CallablePromiseModel;

  stop: CallablePromiseModel;
}
