import { type PLATFORM } from '@lib/shared/platform/platform.constants';
import { type AppTaskParamsModel } from '@tool/task/core/core.models';

export type ContainerBuildParamsModel = AppTaskParamsModel & {
  platform: PLATFORM;
};

export type ContainerBuildModel = {};
