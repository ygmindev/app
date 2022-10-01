import { sequence } from '@lib/shared/core/utils/sequence/sequence';
import { command } from '@tool/task/core/utils/command/command';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

export const install: RegisterParamsModel = {
  name: 'node-install',

  task: async ({ root }) => {
    const response = await prompt([
      { isOptional: true, key: 'install' },
      { isOptional: true, key: 'installDev' },
      { isOptional: true, key: 'remove' },
    ]);
    await sequence(
      [
        response.install &&
          (async (): Promise<boolean> =>
            command({ command: `yarn add ${response.install}`, root })),

        response.installDev &&
          (async (): Promise<boolean> =>
            command({ command: `yarn add ${response.installDev} --dev`, root })),

        response.remove &&
          (async (): Promise<boolean> =>
            command({ command: `yarn remove ${response.remove}`, root })),
      ].filter(Boolean) as Array<() => Promise<boolean>>,
    );
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
