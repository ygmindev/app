import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { type RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import { babel } from '@rollup/plugin-babel';
import inject from '@rollup/plugin-inject';
import resolve from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react-swc';
import { existsSync } from 'fs';
import { getTsconfig } from 'get-tsconfig';
import reduce from 'lodash/reduce';
import some from 'lodash/some';
import trim from 'lodash/trim';
import { visualizer } from 'rollup-plugin-visualizer';
import { type Plugin } from 'vite';
import { searchForWorkspaceRoot } from 'vite';
import { checker } from 'vite-plugin-checker';
import circleDependency from 'vite-plugin-circular-dependency';
import tsconfigPaths from 'vite-tsconfig-paths';

import { fromModules } from '#lib-backend/file/utils/fromModules/fromModules';
import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { _plugins } from '#lib-config/node/bundle/_plugins';
import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '#lib-config/node/bundle/bundle.models';
import { lintCommand } from '#lib-config/node/lint/lint';
import { PLATFORM } from '#lib-platform/core/core.constants';
import { type PlatformModel } from '#lib-platform/core/core.models';
import { type ReturnTypeModel } from '#lib-shared/core/core.models';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';

function _vitePluginIsomorphicImport({ serverPostfix }: { serverPostfix: string }): Plugin {
  return {
    enforce: 'pre',
    name: 'vite-plugin-isomorphic-import',
    async resolveId(this, id, importer, options) {
      if (importer) {
        let resolved = await this.resolve(id, importer, { ...options, skipSelf: true });
        if (resolved && options?.ssr) {
          const postfix = `.${trim(serverPostfix, '.')}`;
          const i = resolved?.id.lastIndexOf('.');
          const idServer =
            i === -1
              ? `${resolved.id}${postfix}`
              : `${resolved.id.substring(0, i)}${postfix}${resolved.id.substring(i)}`;
          const resolvedServer = await this.resolve(idServer, importer, {
            ...options,
            skipSelf: true,
          });
          if (resolvedServer && existsSync(resolvedServer.id)) {
            resolved = resolvedServer;
          }
        }
        return resolved ?? { id };
      }
      return null;
    },
  };
}

export const _bundle = ({
  aliases,
  babelConfig,
  define,
  entry,
  envPrefix,
  extensions,
  mainFields,
  modulePaths,
  outDir,
  provide,
  transpiles,
  tsconfigPath,
  watch,
}: BundleConfigModel): _BundleConfigModel => {
  const isReact = ([PLATFORM.WEB, PLATFORM.ANDROID, PLATFORM.IOS] as Array<PlatformModel>).includes(
    process.env.ENV_PLATFORM,
  );
  const config: ReturnTypeModel<_BundleConfigModel> = {
    build: {
      assetsDir: fromWorking('assets'),

      commonjsOptions: {
        defaultIsModuleExports: true,
        esmExternals: true,
        requireReturnsDefault: 'auto',

        transformMixedEsModules: true,
      },

      minify: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION,

      outDir,

      rollupOptions: {
        ...(entry ? { input: entry } : {}),

        plugins: [resolve({ modulesOnly: true })],
      },
      watch:
        process.env.NODE_ENV === ENVIRONMENT.DEVELOPMENT && watch ? { include: watch } : undefined,
    },

    define,

    envPrefix,

    esbuild: {
      sourcemap: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION ? undefined : true,
    },

    mode: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION ? 'production' : 'development',

    optimizeDeps: {
      esbuildOptions: {
        define,

        keepNames: true,

        mainFields,

        nodePaths: modulePaths,

        plugins: _plugins({ transpiles }),

        resolveExtensions: extensions,

        sourcemap: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION ? undefined : 'inline',

        target: process.env.ENV_PLATFORM === PLATFORM.NODE ? 'node18' : undefined,

        tsconfig: tsconfigPath,
      },

      include: transpiles,
    },

    plugins: filterNil([
      _vitePluginIsomorphicImport({ serverPostfix: 'server' }),

      tsconfigPath && tsconfigPaths({ projects: [tsconfigPath] }),

      checker({
        eslint: { lintCommand: lintCommand() },
        typescript: { tsconfigPath },
      }),

      isReact && react({ tsDecorators: true }),

      provide && inject(provide),

      viteCommonjs(),

      babelConfig &&
        babel({
          ...babelConfig,
          babelHelpers: 'runtime',
          skipPreflightCheck: true,
        } as RollupBabelInputPluginOptions),

      process.env.NODE_ENV === ENVIRONMENT.PRODUCTION && visualizer(),

      circleDependency({}),
    ]),

    resolve: {
      alias: {
        ...aliases,
        ...(tsconfigPath
          ? reduce(
              getTsconfig(tsconfigPath)?.config?.compilerOptions?.paths,
              (result, v, k) => ({
                ...result,
                [k.replaceAll('*', '')]: fromRoot(v[0].replaceAll('*', '')),
              }),
              {},
            )
          : {}),
      },

      extensions,
    },

    root: fromWorking(),

    server: { fs: { allow: [searchForWorkspaceRoot(fromRoot()), fromModules()] } },

    ssr: {
      noExternal: transpiles,
    },
  };

  const defineF = {
    ...config.define,
    ...reduce(
      process.env,
      (result, v, k) =>
        some(config.envPrefix, (prefix) => k.startsWith(prefix))
          ? { ...result, [`process.env.${k}`]: JSON.stringify(v) }
          : result,
      {},
    ),
  };

  config.define = defineF;
  config.optimizeDeps?.esbuildOptions && (config.optimizeDeps.esbuildOptions.define = defineF);

  return config;
};
