import { _nodeDev } from '@tool/task/node/tasks/nodeDev/_nodeDev';
import {
  type NodeDevModel,
  type NodeDevParamsModel,
} from '@tool/task/node/tasks/nodeDev/nodeDev.models';

export const nodeDev = async (params: NodeDevParamsModel): Promise<NodeDevModel> =>
  _nodeDev(params);
