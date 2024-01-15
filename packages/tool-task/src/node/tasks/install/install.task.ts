import { children } from '@lib-backend/file/utils/children/children';
import { fromPackages } from '@lib-backend/file/utils/fromPackages/fromPackages';
import { type TaskParamsModel } from '@tool-task/core/core.models';
import { PROMPT_TYPE } from '@tool-task/core/utils/prompt/prompt.constants';
import { type InstallParamsModel } from '@tool-task/node/tasks/install/install.models';

const install: TaskParamsModel<InstallParamsModel> = {
  name: 'node-install',

  onFinish: ['node-post-install'],

  options: [
    {
      key: 'packages',
      options: children(fromPackages(), { isDirectory: true }).reduce(
        (result, { name }) =>
          name.startsWith('app-') || name.startsWith('backend-') ? [...result, name] : result,
        [] as Array<string>,
      ),
      type: PROMPT_TYPE.MULTIPLE,
    },
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
