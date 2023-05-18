import { ConfigDynamicModel, ConfigStaticModel } from '@lib/config/core/core.models';
import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { DeepKeyModel } from '@lib/shared/core/core.models';
import { TaskParamsModel } from '@tool/task/core/core.models';
import type { UserConfig } from 'vite';

export type WebConfigModel = ConfigStaticModel<{
  build: Pick<TaskParamsModel, 'task'>;

  dev: Pick<TaskParamsModel, 'task'>;

  isSsr?: boolean;

  publicDir: string;

  rootId: string;

  ssrContextKeys?: Array<DeepKeyModel<RootContextModel>>;
}>;

export type _WebConfigModel = ConfigDynamicModel<UserConfig>;