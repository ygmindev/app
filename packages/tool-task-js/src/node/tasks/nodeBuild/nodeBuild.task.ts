import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { task } from '@tool/task/core/utils/task/task';
import { _nodeBuild } from '@tool/task/node/tasks/nodeBuild/_nodeBuild';
import {
  type NodeBuildModel,
  type NodeBuildParamsModel,
} from '@tool/task/node/tasks/nodeBuild/nodeBuild.models';

export const nodeBuild = task<NodeBuildParamsModel, NodeBuildModel>({
  environment: ENVIRONMENT.PRODUCTION,

  task: async (params) => _nodeBuild(params),
});
