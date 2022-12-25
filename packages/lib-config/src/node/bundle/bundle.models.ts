import type { _BundleConfigParamsModel } from '@lib/config/node/bundle/_bundle.models';
import type { BUNDLE_MODE } from '@lib/config/node/bundle/bundle.constants';

export type BundleModeModel = `${BUNDLE_MODE}`;

export interface BundleConfigParamsModel extends Omit<_BundleConfigParamsModel, 'mode'> {}
