import type { BundleConfigParamsModel } from '@lib/config/js/bundle/bundle.models';
import { EXTENSIONS_JS } from '@lib/shared/file/file.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const bundleConfig: BundleConfigParamsModel = {
  define: {
    __DEV__: process.env.NODE_ENV === 'development',
  },

  envPrefix: 'APP_',

  extensions: EXTENSIONS_JS,

  platform: PLATFORM.BASE,
};
