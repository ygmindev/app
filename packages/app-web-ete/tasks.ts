import { randomInt } from '#lib-shared/crypto/utils/randomInt/randomInt';
import { type EnvironmentOverrideParamsModel } from '#lib-shared/environment/environment.models';
import { PING } from '#lib-shared/http/http.constants';
import { uri } from '#lib-shared/http/utils/uri/uri';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import { parallel } from '#tool-task/core/utils/parallel/parallel';
import { waitOn } from '#tool-task/core/utils/waitOn/waitOn';
import { WAIT_ON_RESOURCE_TYPE } from '#tool-task/core/utils/waitOn/waitOn.constants';
import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';

const overrides: EnvironmentOverrideParamsModel['overrides'] = () => ({
  // TODO: rename SERVER variables for security?
  SERVER_OTP_STATIC: randomInt(process.env.SERVER_OTP_LENGTH).toString(),
});

const tasks = [
  ...nodeTasks({
    testOverrides: {
      onBefore: [
        async () => {
          void parallel([
            // ['run awd', { overrides }],
            ['run bld', { overrides }],
          ]);
          await waitOn([
            // [
            //   uri({ host: process.env.SERVER_HOST, path: PING, port: process.env.SERVER_PORT }),
            //   WAIT_ON_RESOURCE_TYPE.HTTP,
            // ],
            [
              uri({ host: process.env.SERVER_HOST, path: PING, port: process.env.SERVER_PORT }),
              WAIT_ON_RESOURCE_TYPE.HTTP,
            ],
          ]);
          return { status: TASK_STATUS.SUCCESS };
        },
      ],

      overrides,
    },
  }),
];

export default tasks;

// import { randomInt } from '#lib-shared/crypto/utils/randomInt/randomInt';
// import { type EnvironmentOverrideParamsModel } from '#lib-shared/environment/environment.models';
// import { PING } from '#lib-shared/http/http.constants';
// import { uri } from '#lib-shared/http/utils/uri/uri';
// import { TASK_STATUS } from '#tool-task/core/core.constants';
// import { type TaskParamsModel } from '#tool-task/core/core.models';
// import { parallel } from '#tool-task/core/utils/parallel/parallel';
// import { waitOn } from '#tool-task/core/utils/waitOn/waitOn';
// import { WAIT_ON_RESOURCE_TYPE } from '#tool-task/core/utils/waitOn/waitOn.constants';
// import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';

// const overrides: EnvironmentOverrideParamsModel['overrides'] = () => ({
//   // TODO: rename SERVER variables for security?
//   SERVER_OTP_STATIC: randomInt(process.env.SERVER_OTP_LENGTH).toString(),
// });

// const tasks = [
//   ...nodeTasks({
//     testOverrides: {
//       onBefore: [
//         async () => {
//           void parallel([
//             ['run awd', { overrides }],
//             // ['run bld', { overrides }],
//           ]);
//           await waitOn([
//             [
//               uri({ host: process.env.APP_HOST, path: PING, port: process.env.APP_PORT }),
//               WAIT_ON_RESOURCE_TYPE.HTTP,
//             ],
//             // [
//             //   uri({ host: process.env.SERVER_HOST, path: PING, port: process.env.SERVER_PORT }),
//             //   WAIT_ON_RESOURCE_TYPE.HTTP,
//             // ],
//           ]);
//           return { status: TASK_STATUS.SUCCESS };
//         },
//       ],

//       overrides,
//     },
//   }),
// ];

// export default tasks;
