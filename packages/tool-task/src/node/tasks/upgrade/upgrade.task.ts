import { config } from '@lib/config/node/packageManager/packageManager';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const upgrade: TaskParamsModel<unknown> = {
  name: 'node-upgrade',

  onFinish: [() => 'node-post-install'],

  task: [`npx ncu -i --deep --version -p ${config.name} -x ${Object.keys(config.fixedVersions).join(',')}`],
};

export default upgrade;
