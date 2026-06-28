import { packageManagerConfig } from '@lib/config/node/packageManager/packageManager';
import { PACAKGE_INSTALL_MODE } from '@lib/config/node/packageManager/packageManager.constants';
import { appPrompt } from '@tool/task/core/utils/appPrompt/appPrompt';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';
import { NODE_INSTALL } from '@tool/task/node/tasks/nodeInstall/nodeInstall.constants';
import {
  type NodeInstallModel,
  type NodeInstallParamsModel,
} from '@tool/task/node/tasks/nodeInstall/nodeInstall.models';

export const nodeInstall = buildTask<NodeInstallParamsModel, NodeInstallModel>({
  name: NODE_INSTALL,

  prompts: [
    appPrompt({ isMultiple: true, key: 'packages', patterns: [/-js/] }),
    { isOptional: true, key: 'install' },
    { isOptional: true, key: 'installDev' },
    { isOptional: true, key: 'installPeer' },
    { isOptional: true, key: 'remove' },
  ],

  task: async ({ install, installDev, installPeer, packages, remove }) => {
    const { installCommand, removeCommand } = packageManagerConfig.params();
    if (install) await execute({ command: installCommand(install, packages) });
    if (installDev)
      await execute({
        command: installCommand(installDev, packages, { mode: PACAKGE_INSTALL_MODE.DEV }),
      });
    if (installPeer)
      await execute({
        command: installCommand(installPeer, packages, { mode: PACAKGE_INSTALL_MODE.PEER }),
      });
    if (remove) await execute({ command: removeCommand(remove, packages) });
  },
});
