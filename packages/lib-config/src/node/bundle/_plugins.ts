import { esbuildDecorators } from '@anatine/esbuild-decorators';
// import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { type UserConfig } from 'vite';

import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { type BundleConfigModel } from '#lib-config/node/bundle/bundle.models';
import { PLATFORM } from '#lib-platform/core/core.constants';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';

type PluginsModel = Required<Required<UserConfig>['optimizeDeps']>['esbuildOptions']['plugins'];

export const _plugins = ({
  transpiles = [],
}: Pick<BundleConfigModel, 'transpiles'> = {}): PluginsModel =>
  filterNil([
    esbuildDecorators({ tsconfig: fromWorking('tsconfig.json') }),

    // transpiles && esbuildCommonjs(transpiles),

    process.env.ENV_PLATFORM === PLATFORM.NODE &&
      nodeExternalsPlugin({ allowList: transpiles, packagePath: fromRoot('package.json') }),
  ]) as PluginsModel;
