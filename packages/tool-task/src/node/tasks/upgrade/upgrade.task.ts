import pacakgeManagerConfig from '@lib/config/node/packageManager/packageManager';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const upgrade: TaskParamsModel<unknown> = {
  name: 'node-upgrade',

  onFinish: [() => 'node-post-install'],

  task: [
    () => {
      const { fixedVersions, name } = pacakgeManagerConfig.params();
      return `npx ncu -i --deep --version -p ${name} -x ${Object.keys(fixedVersions).join(',')}`;
    },
  ],
};

export default upgrade;
