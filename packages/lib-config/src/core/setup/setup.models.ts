// COMPLETE
import { type OptionalCallablePromiseModel } from '#lib-shared/core/core.models';

export type SetupConfigModel = {
  onInitialize: OptionalCallablePromiseModel;

  onTerminate: OptionalCallablePromiseModel;
};

export type _SetupConfigModel = {
  setup: OptionalCallablePromiseModel;
};
