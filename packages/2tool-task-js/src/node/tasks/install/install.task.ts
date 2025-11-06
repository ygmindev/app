import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import pacakgeManagerConfig from '@lib/config/node/packageManager/packageManager';
import { PACAKGE_INSTALL_MODE } from '@lib/config/node/packageManager/packageManager.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { type InstallParamsModel } from '@tool/task/node/tasks/install/install.models';

const install: TaskParamsModel<InstallParamsModel> = {
  name: 'node-install',

  options: async () => [
    {
      key: 'packages',
      options: children(fromPackages(), { isDirectory: true }).reduce(
        (result, { name }) =>
          name.startsWith('app') || name.startsWith('service') || name.startsWith('tool')
            ? [...result, name]
            : result,
        [] as Array<string>,
      ),
      type: PROMPT_TYPE.MULTIPLE,
    },
    { isOptional: true, key: 'install' },
    { isOptional: true, key: 'installDev' },
    { isOptional: true, key: 'installPeer' },
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
        .installCommand(options?.installDev, options?.packages, { mode: PACAKGE_INSTALL_MODE.DEV }),

    ({ options }) =>
      options?.installPeer &&
      pacakgeManagerConfig.params().installCommand(options?.installPeer, options?.packages, {
        mode: PACAKGE_INSTALL_MODE.PEER,
      }),

    ({ options }) =>
      options?.remove &&
      pacakgeManagerConfig.params().removeCommand(options?.remove, options?.packages),
  ],
};

export default install;
