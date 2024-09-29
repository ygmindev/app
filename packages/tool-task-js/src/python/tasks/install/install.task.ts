import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import pacakgeManagerConfig from '@lib/config/python/packageManager/packageManager';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { type InstallParamsModel } from '@tool/task/python/tasks/install/install.models';

const install: TaskParamsModel<InstallParamsModel> = {
  name: 'python-install',

  options: () => [
    {
      key: 'packages',
      options: children(fromPackages(), { isDirectory: true }).reduce(
        (result, { name }) => (name.endsWith('-py') ? [...result, name] : result),
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
      options?.install &&
      pacakgeManagerConfig.params().installCommand(options?.install, options?.packages),

    ({ options }) =>
      options?.installDev &&
      pacakgeManagerConfig
        .params()
        .installCommand(options?.installDev, options?.packages, { isDev: true }),

    ({ options }) =>
      options?.remove &&
      pacakgeManagerConfig.params().removeCommand(options?.remove, options?.packages),
  ],
};

export default install;
