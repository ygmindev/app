import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { rename } from '@tool/task/core/utils/rename/rename';
import { NODE_POST_INSTALL_RENAMES } from '@tool/task/node/tasks/postinstall/postinstall.constants';
import type { PostinstallParamsModel } from '@tool/task/node/tasks/postinstall/postinstall.models';

const postinstall: TaskParamsModel<PostinstallParamsModel> = {
  name: 'node-post-install',

  task: async () => {
    for (const renames of NODE_POST_INSTALL_RENAMES) {
      await rename(renames);
    }
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default postinstall;
