import { getAppRoot } from '@lib/backend/file/utils/getAppRoot/getAppRoot';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { task } from '@tool/task/core/utils/task/task';
import { _nodeDev } from '@tool/task/node/tasks/nodeDev/_nodeDev';
import {
  type NodeDevModel,
  type NodeDevParamsModel,
} from '@tool/task/node/tasks/nodeDev/nodeDev.models';

export const nodeDev = task<NodeDevParamsModel, NodeDevModel>({
  task: async (params, context) => {
    let { pathname } = params;
    if (!pathname && context?.app) {
      const pkg = await getAppRoot(context.app);
      pathname = joinPaths([pkg, 'src/index.ts']);
    }
    return _nodeDev({ ...params, pathname });
  },
});
