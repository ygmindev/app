import { TASK_STATUS } from '#tool-task/core/core.constants';
import type { TaskParamsModel } from '#tool-task/core/core.models';
import { rename } from '#tool-task/core/utils/rename/rename';
import { NODE_POST_INSTALL_JS_TO_JSX } from '#tool-task/node/tasks/postInstall/postInstall.constants';
import type { PostInstallParamsModel } from '#tool-task/node/tasks/postInstall/postInstall.models';

const postInstall: TaskParamsModel<PostInstallParamsModel> = {
  name: 'node-post-install',

  task: async () => {
    for (const renames of NODE_POST_INSTALL_JS_TO_JSX) {
      const paths = renames.split('/');
      const filename = paths.pop();
      filename &&
        (await rename({
          from: filename,
          path: paths.join('/'),
          to: filename?.replace('.js', '.jsx').replace('.ts', '.tsx'),
        }));
    }
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default postInstall;
