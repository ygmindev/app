import { esbuildDecorators } from '@anatine/esbuild-decorators';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { PLATFORM } from '@lib/platform/core/core.constants';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
import { type Plugin } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { readFileSync } from 'fs';
import { sep } from 'path';
import posix from 'path/posix';

const excludeVendorFromSourceMap = (includes = []): Plugin => ({
  name: 'excludeVendorFromSourceMap',
  setup(build) {
    const emptySourceMap =
      '\n//# sourceMappingURL=data:application/json;base64,' +
      Buffer.from(JSON.stringify({ mappings: 'A', sources: [''], version: 3 })).toString('base64');

    build.onLoad({ filter: /node_modules/u }, async (args) => {
      if (
        /\.[mc]?js$/.test(args.path) &&
        !new RegExp(includes.join('|'), 'u').test(args.path.split(sep).join(posix.sep))
      ) {
        return {
          contents: `${readFileSync(args.path, 'utf8')}${emptySourceMap}`,
          loader: 'default',
        };
      }
    });
  },
});

export const _plugins = ({
  rootDirs,
  transpiles,
}: Pick<BundleConfigModel, 'transpiles' | 'rootDirs'>): Array<Plugin> =>
  filterNil([
    esbuildDecorators({ tsconfig: fromWorking('tsconfig.json') }),

    transpiles && esbuildCommonjs(transpiles),

    excludeVendorFromSourceMap(),

    process.env.ENV_PLATFORM === PLATFORM.NODE &&
      nodeExternalsPlugin({
        allowList: transpiles,
        packagePath: rootDirs?.map((path) => joinPaths([path, 'package.json'])),
      }),
  ]) as Array<Plugin>;
