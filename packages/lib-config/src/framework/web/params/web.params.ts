import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import type { _WebConfigParamsModel } from '@lib/config/framework/web/_web.models';

const webConfigParams: _WebConfigParamsModel = {
  build: {
    command: fromExecutable('vite build'),

    config: fromConfig('framework/web/configs/web.config.ts'),
  },

  dev: {
    command: 'vite',

    config: fromConfig('framework/web/configs/web.config.ts'),
  },

  isSsr: true,

  publicDir: 'assets',

  rootId: 'root',

  ssrContextKeys: ['state.initialState'],
};

export default webConfigParams;
