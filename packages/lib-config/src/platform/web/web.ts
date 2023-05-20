import type { WebConfigModel } from '@lib/config/platform/web/_web.models';
import { TASK_STATUS } from '@tool/task/core/core.constants';

const webConfig: WebConfigModel = {
  build: {
    task: async ({ root }) => {
      // const _webConfig = (await import('@lib/config/platform/web/_web')).default;
      // const webConfig = await _webConfig();
      // await build(webConfig);
      return { status: TASK_STATUS.SUCCESS };
    },
  },

  dev: {
    task: async ({ root }) => {
      // const _webConfig = (await import('@lib/config/platform/web/_web')).default;
      // const _server = (await import('@lib/platform/web/utils/server/server')).server;
      // const port = process.env[`APP_${process.env.ENV_NAME}_PORT`] || '';
      // const webConfig = await _webConfig();
      // await _server({ config: webConfig, port, root });
      return { status: TASK_STATUS.SUCCESS };
    },
  },

  isSsr: true,

  publicDir: 'assets',

  rootId: 'root',

  ssrContextKeys: ['state.initialState'],
};

export default webConfig;

// import type { WebConfigModel } from '@lib/config/platform/web/_web.models';
// import { TASK_STATUS } from '@tool/task/core/core.constants';
// import { build } from 'vite';

// const webConfig: WebConfigModel = {
//   build: {
//     task: async ({ root }) => {
//       const _webConfig = (await import('@lib/config/platform/web/_web')).default;
//       const webConfig = await _webConfig();
//       await build(webConfig);
//       return { status: TASK_STATUS.SUCCESS };
//     },
//   },

//   dev: {
//     task: async ({ root }) => {
//       const _webConfig = (await import('@lib/config/platform/web/_web')).default;
//       const _server = (await import('@lib/platform/web/utils/server/server')).server;
//       const port = process.env[`APP_${process.env.ENV_NAME}_PORT`] || '';
//       const webConfig = await _webConfig();
//       await _server({ config: webConfig, port, root });
//       return { status: TASK_STATUS.SUCCESS };
//     },
//   },

//   isSsr: true,

//   publicDir: 'assets',

//   rootId: 'root',

//   ssrContextKeys: ['state.initialState'],
// };

// export default webConfig;
