import pacakgeManagerConfig from '@lib/config/node/packageManager/packageManager';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const upgrade: TaskParamsModel<unknown> = {
  name: 'node-upgrade',

  task: [
    () => {
      const { fixedVersions, name } = pacakgeManagerConfig.params();
      return [
        `npx ncu -i --deep -p ${name} ${fixedVersions ? `-x ${Object.keys(fixedVersions).join(',')}` : ''}`,
        { isInteractive: true },
      ];
    },
  ],
};

export default upgrade;
