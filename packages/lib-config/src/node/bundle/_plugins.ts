import { esbuildDecorators } from '@anatine/esbuild-decorators';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import { ReturnTypeModel } from '@lib/shared/core/core.models';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
import type { Plugin } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { filelocPlugin } from 'esbuild-plugin-fileloc';

export const _plugins = ({
  externals = [],
  platform,
}: Pick<ReturnTypeModel<BundleConfigModel>, 'externals' | 'platform'>): Array<Plugin> =>
  [
    esbuildDecorators({ tsconfig: fromWorking('tsconfig.json') }),

    externals && esbuildCommonjs(externals),

    nodeExternalsPlugin({ packagePath: fromRoot('package.json'), allowList: externals }),

    platform === PLATFORM.NODE && filelocPlugin(),
  ].filter(Boolean) as Array<Plugin>;
