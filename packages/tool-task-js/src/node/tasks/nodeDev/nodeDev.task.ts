import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { task } from '@tool/task/core/utils/task/task';
import { _nodeDev } from '@tool/task/node/tasks/nodeDev/_nodeDev';
import {
  type NodeDevModel,
  type NodeDevParamsModel,
} from '@tool/task/node/tasks/nodeDev/nodeDev.models';

export const nodeDev = task({
  task: async (params: NodeDevParamsModel, context): Promise<NodeDevModel> =>
    _nodeDev({
      ...params,
      pathname: params.pathname ?? fromPackages(context?.app, 'src/index.ts'),
    }),
});
