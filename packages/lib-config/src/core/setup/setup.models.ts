import { type OptionalCallablePromiseModel } from '#lib-shared/core/core.models';

export type SetupConfigModel = {
  onInitialize: OptionalCallablePromiseModel;

  onShutdown: OptionalCallablePromiseModel;
};
