import { type TaskParamsModel } from '@tool-task/core/core.models';
import { type InstallParamsModel } from '@tool-task/node/tasks/install/install.models';

const install: TaskParamsModel<InstallParamsModel> = {
  name: 'node-install',

  onFinish: ['node-post-install'],

  options: [
    { isOptional: true, key: 'install' },
    { isOptional: true, key: 'installDev' },
    { isOptional: true, key: 'remove' },
  ],

  task: [
    ({ options }) =>
      options?.install === '*' ? 'yarn' : options?.install ? `yarn add ${options.install}` : null,

    ({ options }) => options?.installDev && `yarn add  --dev ${options.installDev}`,

    ({ options }) => options?.remove && `yarn remove ${options.remove}`,
  ],
};

export default install;
