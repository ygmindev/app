import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { runCommands } from '@tool/task/core/utils/runCommands/runCommands';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';

const tasks: Array<TaskParamsModel<unknown>> = [
  ...nodeTasks({
    testOverrides: { environment: ENVIRONMENT.DEVELOPMENT, onBefore: ['awes'] },
  }),

  {
    name: 'setup',

    overrides: { OTP_STATIC: 'true' },

    task: async () => {
      await runCommands({
        commands: [
          { command: 'run bld', completeMessage: 'Server ready' },
          { command: 'run awd', completeMessage: 'Compiled successfully' },
        ],
      });
      return { status: TASK_STATUS.SUCCESS };
    },
  },
];

export default tasks;
