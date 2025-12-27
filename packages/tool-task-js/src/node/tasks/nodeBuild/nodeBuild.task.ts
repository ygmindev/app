import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { _nodeBuild } from '@tool/task/node/tasks/nodeBuild/_nodeBuild';
import { NODE_BUILD } from '@tool/task/node/tasks/nodeBuild/nodeBuild.constants';
import {
  type NodeBuildModel,
  type NodeBuildParamsModel,
} from '@tool/task/node/tasks/nodeBuild/nodeBuild.models';

export const nodeBuild = buildTask<NodeBuildParamsModel, NodeBuildModel>({
  context: {
    environment: ENVIRONMENT.PRODUCTION,
  },

  name: NODE_BUILD,

  task: async (params) => _nodeBuild(params),
});
