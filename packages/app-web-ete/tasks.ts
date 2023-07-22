import { type TaskParamsModel } from '#tool-task/core/core.models';
import { nodeTasks } from '#tool-task/node/utils/nodeTasks/nodeTasks';

const tasks: Array<TaskParamsModel<unknown>> = nodeTasks({
  additionalTasks: [
    // {
    //   name: 'wait',
    //   task: [
    //     () =>
    //       waitOn([
    //         [
    //           uri({ host: process.env.SERVER_HOST, path: PING, port: process.env.SERVER_PORT }),
    //           WAIT_ON_RESOURCE_TYPE.HEAD,
    //         ],
    //         [
    //           uri({ host: process.env.APP_HOST, path: PING, port: process.env.APP_PORT }),
    //           WAIT_ON_RESOURCE_TYPE.HEAD,
    //         ],
    //       ]),
    //   ],
    // },
  ],

  eteTasks: ['run bld', 'run awd'],
});

export default tasks;
