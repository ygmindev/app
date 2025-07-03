import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { lintCommand } from '@lib/config/node/lint/lint';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const lint: TaskParamsModel<unknown> = {
  name: 'lint',

  task: [
    () =>
      `${fromExecutable('tsc')} --noEmitOnError false --project ${fromWorking('tsconfig.json')}`,

    () => lintCommand(true),
  ],
};
