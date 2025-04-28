import { esbuildDecorators } from '@anatine/esbuild-decorators';
import { esbuildFlowPlugin } from '@bunchtogether/vite-plugin-flow';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
import { type Plugin } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
// import pinoPlugin from 'esbuild-plugin-pino';
import { readFileSync } from 'fs';
import { sep } from 'path';
import posix from 'path/posix';

const excludeVendorFromSourceMap = (includes = []): Plugin => ({
  name: 'excludeVendorFromSourceMap',
  setup(build) {
    const emptySourceMap =
      '\n//# sourceMappingURL=data:application/json;base64,' +
      Buffer.from(JSON.stringify({ mappings: 'A', sources: [''], version: 3 })).toString('base64');

    build.onLoad({ filter: /node_modules/ }, async (args) => {
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
  externals,
  format,
  rootDirs,
  transpileModules,
  transpilePatterns,
}: Pick<BundleConfigModel, 'externals' | 'format' | 'rootDirs' | 'transpileModules' | 'transpilePatterns'>): Array<Plugin> =>
  filterNil([
    {
      name: 'js-to-jsx',
      setup(build) {
        build.onLoad({ filter: /node_modules\/.*\.[j|t]s?$/ }, (args) => ({
          contents: readFileSync(args.path, 'utf8'),
          loader: 'tsx',
        }));
      },
    } as Plugin,

    // pinoPlugin({ transports: ['pino-pretty'] }),

    esbuildDecorators({ tsconfig: fromWorking('tsconfig.json') }),

    transpileModules && esbuildCommonjs(transpileModules),

    excludeVendorFromSourceMap(),

    (esbuildFlowPlugin as () => unknown)() as Plugin,

    externals && nodeExternalsPlugin({
      allowList: [...(transpileModules ?? []), ...(transpilePatterns ?? [])],
      packagePath: rootDirs?.map((path) => joinPaths([path, 'package.json'])),
    }),
  ]) as Array<Plugin>;
