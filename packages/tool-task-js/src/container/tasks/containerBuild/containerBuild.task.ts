import { Docker } from '@lib/backend/container/utils/Docker/Docker';
import { CONTAINER_BUILD } from '@tool/task/container/tasks/containerBuild/containerBuild.constants';
import {
  type ContainerBuildModel,
  type ContainerBuildParamsModel,
} from '@tool/task/container/tasks/containerBuild/containerBuild.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';

export const containerBuild = buildTask<ContainerBuildParamsModel, ContainerBuildModel>({
  name: CONTAINER_BUILD,

  task: async ({ dockerfilename, image }, context) => {
    await new Docker({ dockerfilename, image }).build();
    return {};
  },
});
