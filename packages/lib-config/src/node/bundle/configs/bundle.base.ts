import { BUNDLE_TARGET } from '@lib/config/node/bundle/bundle.constants';
import type { BundleConfigParamsModel } from '@lib/config/node/bundle/bundle.models';
import { EXTENSIONS_JS } from '@lib/shared/file/file.constants';

export const bundleConfig: BundleConfigParamsModel = {
  envPrefix: 'APP_',

  extensions: EXTENSIONS_JS,

  target: BUNDLE_TARGET.NODE,
};
