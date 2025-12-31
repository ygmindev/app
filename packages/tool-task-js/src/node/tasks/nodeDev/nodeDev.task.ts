import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { _nodeDev } from '@tool/task/node/tasks/nodeDev/_nodeDev';
import { NODE_DEV } from '@tool/task/node/tasks/nodeDev/nodeDev.constants';
import {
  type NodeDevModel,
  type NodeDevParamsModel,
} from '@tool/task/node/tasks/nodeDev/nodeDev.models';

export const nodeDev = buildTask<NodeDevParamsModel, NodeDevModel>({
  context: {
    environment: ENVIRONMENT.DEVELOPMENT,
  },

  name: NODE_DEV,

  task: async (params, context) => {
    const root = context?.root ?? fromWorking();
    let pathname = params.pathname
      ? isArray(params.pathname)
        ? params.pathname
        : [params.pathname]
      : ['src/index.ts'];
    pathname = pathname.map((v) => joinPaths([root, v]));
    return _nodeDev({ ...params, pathname });
  },
});
