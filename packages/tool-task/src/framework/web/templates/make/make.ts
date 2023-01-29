import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { webConfig } from '@lib/config/framework/web/configs/web.config';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { command } from '@tool/task/core/utils/command/command';

export const make: TaskParamsModel = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'make',

  task: async ({ root }) => {
    await command({
      command: `${fromExecutable('vite')} build --config ${webConfig.configFile}`,
      root,
    });
    return { status: TASK_STATUS.SUCCESS };
  },
};

// import { TASK_STATUS } from '@lib/config/core/task/task.constants';
// import type { TaskParamsModel } from '@lib/config/core/task/task.models';
// import type { RouteModel } from '@lib/frontend/route/route.models';
// import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
// import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';

// const _getPathnames = (route: RouteModel, parent = '/'): Array<string> =>
//   route.routes
//     ? route.routes.reduce(
//         (result, child) => [...result, ..._getPathnames(child, parent)],
//         [] as Array<string>,
//       )
//     : [trimPathname(`${parent}/${route.pathname}`)];

// export const make: TaskParamsModel = {
//   environment: ENVIRONMENT.PRODUCTION,

//   name: 'make',

//   task: async ({ root }) => {
//     const { routes } = await import(`${root}/src/routes.tsx`);
//     const _routes = (routes as Array<RouteModel>).map((route) => _getPathnames(route)).flat();
//     console.warn(_routes);
//     return { status: TASK_STATUS.SUCCESS };
//   },
// };
