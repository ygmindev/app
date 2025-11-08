import { _nodeBuild } from '@tool/task/node/tasks/nodeBuild/_nodeBuild';
import {
  type NodeBuildModel,
  type NodeBuildParamsModel,
} from '@tool/task/node/tasks/nodeBuild/nodeBuild.models';

export const nodeBuild = async (params: NodeBuildParamsModel): Promise<NodeBuildModel> =>
  _nodeBuild(params);
