import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
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
