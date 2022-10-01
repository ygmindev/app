import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { command } from '@tool/task/core/utils/command/command';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';

export const iosPod: RegisterParamsModel = {
  name: 'iosPod',

  task: async () => {
    await runClean({ patterns: ['Pods'], root: fromWorking('ios') });
    await command({ command: 'pod install --repo-update', root: fromWorking('ios') });
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
