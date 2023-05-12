import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export interface SetupModel {
  initialize: CallablePromiseModel;

  isInitialized: boolean;

  isTerminated: boolean;

  terminate: CallablePromiseModel;
}
