import { ConfigDynamicModel, ConfigStaticModel } from '@lib/config/core/core.models';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export type SetupConfigModel = ConfigStaticModel<{
  onInitialize: CallablePromiseModel;

  onTerminate: CallablePromiseModel;
}> 

export type _SetupConfigModel = ConfigDynamicModel<SetupConfigModel>;
