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

export const esbuildPluginExcludeVendorFromSourceMap = (includes = []): Plugin => ({
  name: 'plugin:excludeVendorFromSourceMap',
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

export const esbuildPluginResolveAlias = (
  aliases: Array<{ from: RegExp | string; to: string }>,
): Plugin => ({
  name: 'plugin:resolveAlias',
  setup(build) {
    build.onResolve(
      {
        filter: new RegExp(
          `^${aliases
            .map(({ from }) =>
              from instanceof RegExp ? from.source : from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
            )
            .join('|')}$`,
        ),
        namespace: 'file',
      },
      ({ path }) => {
        const match = aliases.find(({ from }) =>
          from instanceof RegExp ? from.test(path) : from === path,
        );
        return match
          ? {
              external: true,
              path: match.from instanceof RegExp ? path.replace(match.from, match.to) : match.to,
            }
          : null;
      },
    );
  },
});

export const _plugins = ({
  extensions,
  externals,
  format,
  rootDirs,
  transpileModules,
  transpilePatterns,
}: Pick<
  BundleConfigModel,
  'externals' | 'extensions' | 'format' | 'rootDirs' | 'transpileModules' | 'transpilePatterns'
>): Array<Plugin> =>
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

    transpileModules?.length && esbuildCommonjs(transpileModules),

    esbuildPluginExcludeVendorFromSourceMap(),

    (esbuildFlowPlugin as () => unknown)() as Plugin,

    externals?.length &&
      nodeExternalsPlugin({
        allowList: [...(transpileModules ?? []), ...(transpilePatterns ?? [])],
        forceExternalList: externals,
        packagePath: rootDirs?.map((path) => joinPaths([path, 'package.json'])),
      }),
  ]) as Array<Plugin>;
