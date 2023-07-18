import { fromExecutable } from '#lib-backend/file/utils/fromExecutable/fromExecutable';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { NODE_UPGRADE_EXCLUDES } from '#tool-task/node/tasks/upgrade/upgrade.constants';

const upgrade: TaskParamsModel = {
  name: 'node-upgrade',

  onFinish: [() => 'node-post-install'],

  task: () =>
    `${fromExecutable('ncu')} -i -p yarn -x ${Object.keys(NODE_UPGRADE_EXCLUDES).join(',')}`,

  // upgrade && (await backup.task({ ...context, options: { name: 'node-upgrade' } }));
};

export default upgrade;
