import { task } from '@tool/task/core/utils/task/task';
import { _nodeDev } from '@tool/task/node/tasks/nodeDev/_nodeDev';
import {
  type NodeDevModel,
  type NodeDevParamsModel,
} from '@tool/task/node/tasks/nodeDev/nodeDev.models';

export const nodeDev = task({
  task: async (params: NodeDevParamsModel): Promise<NodeDevModel> => _nodeDev(params),
});
