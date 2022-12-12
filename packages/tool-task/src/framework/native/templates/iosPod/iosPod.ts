import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { command } from '@tool/task/core/utils/command/command';
import { runClean } from '@tool/task/core/utils/runClean/runClean';

export const iosPod: TaskParamsModel = {
  name: 'iosPod',

  task: async () => {
    await runClean({ patterns: ['Pods'], root: fromWorking('ios') });
    await command({ command: 'pod install --repo-update', root: fromWorking('ios') });
    return { status: TASK_STATUS.SUCCESS };
  },
};
