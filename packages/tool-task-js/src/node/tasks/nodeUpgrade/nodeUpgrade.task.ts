import { packageManagerConfig } from '@lib/config/node/packageManager/packageManager';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';
import { NODE_UPGRADE } from '@tool/task/node/tasks/nodeUpgrade/nodeUpgrade.constants';
import {
  type NodeUpgradeModel,
  type NodeUpgradeParamsModel,
} from '@tool/task/node/tasks/nodeUpgrade/nodeUpgrade.models';

export const nodeUpgrade = buildTask<NodeUpgradeParamsModel, NodeUpgradeModel>({
  name: NODE_UPGRADE,

  task: async (params) => {
    const { fixedVersions, name, upgradeCommand } = packageManagerConfig.params();
    return execute({ command: upgradeCommand(name, fixedVersions), isInteractive: true });
  },
});
