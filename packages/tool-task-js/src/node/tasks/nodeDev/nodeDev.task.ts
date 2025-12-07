import { getAppRoot } from '@lib/backend/file/utils/getAppRoot/getAppRoot';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { _nodeDev } from '@tool/task/node/tasks/nodeDev/_nodeDev';
import {
  type NodeDevModel,
  type NodeDevParamsModel,
} from '@tool/task/node/tasks/nodeDev/nodeDev.models';

export const nodeDev = buildTask<NodeDevParamsModel, NodeDevModel>({
  task: async (params, context) => {
    let { pathname } = params;
    if (!pathname && context?.app) {
      const pkg = await getAppRoot(context.app);
      pathname = joinPaths([pkg, 'src/index.ts']);
    }
    return _nodeDev({ ...params, pathname });
  },
});
