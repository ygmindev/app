import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
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
