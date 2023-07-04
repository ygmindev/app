import { esbuildDecorators } from '@anatine/esbuild-decorators';
import { type Plugin } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { filelocPlugin } from 'esbuild-plugin-fileloc';

import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { type BundleConfigModel } from '#lib-config/node/bundle/bundle.models';
import { PLATFORM } from '#lib-platform/core/core.constants';
import { type OptionalCallableModel } from '#lib-shared/core/core.models';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';

export const _plugins = ({
  transpiles = [],
}: Pick<BundleConfigModel, 'transpiles'>): Array<Plugin> =>
  filterNil([
    esbuildDecorators({ tsconfig: fromWorking('tsconfig.json') }),

    process.env.ENV_PLATFORM === PLATFORM.NODE &&
      nodeExternalsPlugin({ allowList: transpiles, packagePath: fromRoot('package.json') }),

    process.env.ENV_PLATFORM === PLATFORM.NODE &&
      (filelocPlugin as OptionalCallableModel<Plugin>)(),
  ]);
