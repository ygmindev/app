import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export interface _SetupConfigModel {
  onInitialize: CallablePromiseModel;

  onTerminate: CallablePromiseModel;
}
