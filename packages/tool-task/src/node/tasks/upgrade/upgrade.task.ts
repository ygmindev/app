import { fromExecutable } from '@lib-backend/file/utils/fromExecutable/fromExecutable';
import { config } from '@lib-config/node/packageManager/packageManager';
import { type TaskParamsModel } from '@tool-task/core/core.models';

const upgrade: TaskParamsModel<unknown> = {
  name: 'node-upgrade',

  onFinish: [() => 'node-post-install'],

  task: [`${fromExecutable('ncu')} -i -p yarn -x ${Object.keys(config.fixedVersions).join(',')}`],
};

export default upgrade;
