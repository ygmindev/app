import { _BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { DeepKeyModel, ReturnTypeModel } from '@lib/shared/core/core.models';
import type { UserConfig } from 'vite';

export interface WebConfigModel {
  bundleConfig: ReturnTypeModel<_BundleConfigModel>;

  isSsr?: boolean;

  publicDir: string;

  rootId: string;

  ssrContextKeys?: Array<DeepKeyModel<RootContextModel>>;
};

export interface _WebConfigModel extends UserConfig {}
