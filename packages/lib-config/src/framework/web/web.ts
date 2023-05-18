import _webConfig from '@lib/config/framework/web/_web';
import type { WebConfigModel } from '@lib/config/framework/web/_web.models';
import { server } from '@lib/framework/web/utils/server/server';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import { build } from 'vite';

const webConfig: WebConfigModel = {
  build: {
    run: async () => {
      const webConfig = await _webConfig();
      await build(webConfig);
      return { status: TASK_STATUS.SUCCESS };
    },
  },

  dev: {
    run: async ({ root }) => {
      const port = process.env[`APP_${process.env.ENV_NAME}_PORT`] || '';
      const webConfig = await _webConfig();
      await server({ config: webConfig, port, root });
      return { status: TASK_STATUS.SUCCESS };
    },
  },

  isSsr: true,

  publicDir: 'assets',

  rootId: 'root',

  ssrContextKeys: ['state.initialState'],
};

export default webConfig;
