import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { register } from '@tool/task/core/utils/register/register';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import { runCommands } from '@tool/task/core/utils/runCommands/runCommands';
import { registerNodeTasks } from '@tool/task/node/utils/registerNodeTasks/registerNodeTasks';

import { name } from './package.json';

register({
  name: 'setup',

  overrides: { OTP_STATIC: 'true' },

  target: name,

  task: async () => {
    await runCommands({
      commands: [
        { command: 'run sld', completeMessage: 'Server ready' },
        { command: 'run awd', completeMessage: 'Compiled successfully' },
      ],
    });
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
});

registerNodeTasks({
  name,
  testOverrides: { dependencies: ['awes'], environment: ENVIRONMENT.DEVELOPMENT },
});
