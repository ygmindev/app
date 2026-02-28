import { type PLATFORM } from '@lib/shared/platform/platform.constants';
import { type AppTaskParamsModel } from '@tool/task/core/core.models';

export type ContainerPublishParamsModel = AppTaskParamsModel & {
  isBuild?: boolean;
  platform: PLATFORM;
};

export type ContainerPublishModel = {};
