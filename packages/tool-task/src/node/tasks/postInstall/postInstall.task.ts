import pacakgeManagerConfig from '@lib/config/node/packageManager/packageManager';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { rename } from '@tool/task/core/utils/rename/rename';
import { type PostInstallParamsModel } from '@tool/task/node/tasks/postInstall/postInstall.models';

const postInstall: TaskParamsModel<PostInstallParamsModel> = {
  name: 'node-post-install',

  task: [
    async () => {
      for (const renames of pacakgeManagerConfig.params().toJsx) {
        const paths = renames.split('/');
        const filename = paths.pop();
        filename &&
          (await rename({
            from: filename,
            path: paths.join('/'),
            to: filename?.replace('.js', '.jsx').replace('.ts', '.tsx'),
          }));
      }
    },
  ],
};

export default postInstall;
