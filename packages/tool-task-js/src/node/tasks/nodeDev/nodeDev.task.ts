import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { getAppRoot } from '@lib/backend/file/utils/getAppRoot/getAppRoot';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { _nodeDev } from '@tool/task/node/tasks/nodeDev/_nodeDev';
import {
  type NodeDevModel,
  type NodeDevParamsModel,
} from '@tool/task/node/tasks/nodeDev/nodeDev.models';

export const nodeDev = buildTask<NodeDevParamsModel, NodeDevModel>({
  context: {
    environment: ENVIRONMENT.DEVELOPMENT,
  },

  task: async (params, context) => {
    const app = context?.app ? await getAppRoot(context.app) : fromRoot();
    let pathname = params.pathname
      ? isArray(params.pathname)
        ? params.pathname
        : [params.pathname]
      : ['src/index.ts'];
    pathname = pathname.map((v) => joinPaths([app, v]));
    return _nodeDev({ ...params, pathname });
  },
});
