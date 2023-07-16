import { randomInt } from '#lib-shared/crypto/utils/randomInt/randomInt';
import { uri } from '#lib-shared/http/utils/uri/uri';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { parallel } from '#tool-task/core/utils/parallel/parallel';
import { waitOn } from '#tool-task/core/utils/waitOn/waitOn';
import { WAIT_ON_RESOURCE_TYPE } from '#tool-task/core/utils/waitOn/waitOn.constants';
import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';

const tasks: Array<TaskParamsModel<unknown>> = [
  ...nodeTasks({
    testOverrides: {
      onBefore: [
        async () => {
          // await parallel([['run awd'], ['run bld']]);
          void parallel([['run bld']]);
          await waitOn([
            // [
            //   uri({ host: process.env.APP_HOST, port: process.env.APP_PORT }),
            //   WAIT_ON_RESOURCE_TYPE.HTTP,
            // ],
            [
              uri({
                host: process.env.SERVER_HOST,
                path: '/api/ping',
                port: process.env.SERVER_PORT,
              }),
              WAIT_ON_RESOURCE_TYPE.HTTP,
            ],
          ]);
          console.warn(333);
          return { status: TASK_STATUS.SUCCESS };
        },
      ],

      overrides: () => ({
        // TODO: rename SERVER variables for security?
        SERVER_OTP_STATIC: randomInt(process.env.SERVER_OTP_LENGTH).toString(),
      }),
    },
  }),
];

export default tasks;
