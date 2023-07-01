import { type UserConfig } from 'vite';

import { type ConfigDynamicModel } from '#lib-config/core/core.models';
import { type _BabelConfigModel } from '#lib-config/node/babel/babel.models';
import { type PlatformModel } from '#lib-platform/core/core.models';
import { type EmptyObjectModel } from '#lib-shared/core/core.models';

export type BundleConfigOptionsModel = EmptyObjectModel;

export type BundleConfigModel = ConfigDynamicModel<
  {
    aliases?: Record<string, string>;

    babelConfig?: _BabelConfigModel;

    define?: Record<string, string>;

    entry?: string;

    envPrefix: Array<string>;

    extensions: Array<string>;

    mainFields?: Array<string>;

    modulePaths: Array<string>;

    outDir?: string;

    platform: PlatformModel;

    provide?: Record<string, string>;

    transpiles?: Array<string>;

    tsconfigPath?: string;

    watch?: Array<string>;
  },
  BundleConfigOptionsModel
>;

export type _BundleConfigModel = ConfigDynamicModel<UserConfig, BundleConfigOptionsModel>;
