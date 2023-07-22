import { randomInt } from '#lib-shared/crypto/utils/randomInt/randomInt';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';
import { PING } from '#lib-shared/http/http.constants';
import { uri } from '#lib-shared/http/utils/uri/uri';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { PARALLEL_CONDITION } from '#tool-task/core/utils/parallel/parallel.constants';
import { waitOn } from '#tool-task/core/utils/waitOn/waitOn';
import { WAIT_ON_RESOURCE_TYPE } from '#tool-task/core/utils/waitOn/waitOn.constants';
import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';

const tasks: Array<TaskParamsModel<unknown>> = nodeTasks({
  additionalTasks: [
    {
      name: 'wait',

      task: [
        () =>
          waitOn([
            // [
            //   uri({ host: process.env.SERVER_HOST, path: PING, port: process.env.SERVER_PORT }),
            //   WAIT_ON_RESOURCE_TYPE.HTTP,
            // ],
            [
              uri({ host: process.env.APP_HOST, path: PING, port: process.env.APP_PORT }),
              WAIT_ON_RESOURCE_TYPE.HTTP,
            ],
          ]),
      ],
    },
  ],

  testOverrides: {
    onBefore: [[['run awew', 'run awd'], { condition: PARALLEL_CONDITION.FIRST }]],
    variables: () => ({
      NODE_ENV: ENVIRONMENT.TEST,
      // TODO: rename SERVER variables for security?
      SERVER_OTP_STATIC: randomInt(process.env.SERVER_OTP_LENGTH).toString(),
    }),
  },
});

export default tasks;

// import { randomInt } from '#lib-shared/crypto/utils/randomInt/randomInt';
// import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';
// import { PING } from '#lib-shared/http/http.constants';
// import { uri } from '#lib-shared/http/utils/uri/uri';
// import { type TaskParamsModel } from '#tool-task/core/core.models';
// import { PARALLEL_CONDITION } from '#tool-task/core/utils/parallel/parallel.constants';
// import { waitOn } from '#tool-task/core/utils/waitOn/waitOn';
// import { WAIT_ON_RESOURCE_TYPE } from '#tool-task/core/utils/waitOn/waitOn.constants';
// import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';

// const tasks: Array<TaskParamsModel<unknown>> = nodeTasks({
//   additionalTasks: [
//     {
//       name: 'wait',

//       task: [
//         () =>
//           waitOn([
//             [
//               uri({ host: process.env.SERVER_HOST, path: PING, port: process.env.SERVER_PORT }),
//               WAIT_ON_RESOURCE_TYPE.HTTP,
//             ],
//           ]),
//       ],
//     },
//   ],

//   testOverrides: {
//     onBefore: [[['run awew', 'run bld'], { condition: PARALLEL_CONDITION.FIRST }]],
//     variables: () => ({
//       NODE_ENV: ENVIRONMENT.TEST,
//       // TODO: rename SERVER variables for security?
//       SERVER_OTP_STATIC: randomInt(process.env.SERVER_OTP_LENGTH).toString(),
//     }),
//   },
// });

// export default tasks;
