import type { CallablePromiseModel } from '#lib-shared/core/core.models';

export interface SetupConfigModel {
  onInitialize: CallablePromiseModel;

  onTerminate: CallablePromiseModel;
}
