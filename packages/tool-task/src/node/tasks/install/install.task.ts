import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import { sequence } from '@lib/shared/core/utils/sequence/sequence';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel, TaskResultModel } from '@tool/task/core/core.models';
import { command } from '@tool/task/core/utils/command/command';
import { prompt } from '@tool/task/core/utils/prompt/prompt';

const install: TaskParamsModel = {
  name: 'node-install',

  onAfter: ['node-post-install'],

  task: async ({ root }) => {
    const response = await prompt([
      { isOptional: true, key: 'install' },
      { isOptional: true, key: 'installDev' },
      { isOptional: true, key: 'remove' },
    ]);
    await sequence(
      [
        response.install &&
          (async () =>
            command(`yarn add ${response.install}`, { root })),

        response.installDev &&
          (async () =>
            command(`yarn add ${response.installDev} --dev`, { root })),

        response.remove &&
          (async () =>
            command(`yarn remove ${response.remove}`, { root })),
      ].filter(Boolean) as Array<CallablePromiseModel<TaskResultModel>>,
    );
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default install;
