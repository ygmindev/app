import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fileConfig } from '@lib/config/file/file';
import { BUILD_DIR, EXTENSIONS_BASE, TEMP_DIR } from '@lib/config/file/file.constants';
import { libraryConfig } from '@lib/config/library/library';
import { _bundle } from '@lib/config/node/bundle/_bundle';
import { BUNDLE_SOURCEMAP } from '@lib/config/node/bundle/bundle.constants';
import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '@lib/config/node/bundle/bundle.models';
import { typescriptConfig } from '@lib/config/node/typescript/typescript';
import { Config } from '@lib/config/utils/Config/Config';
import { cartesianString } from '@lib/shared/core/utils/cartesianString/cartesianString';

export const bundleConfig = new Config<BundleConfigModel, _BundleConfigModel>({
  config: _bundle,

  params: () => {
    const { extensions, packageDirs } = fileConfig.params();
    return {
      // aliases: [
      //   {
      //     from: /^graphql/,
      //     to: fromModules('graphql'),
      //   },
      // ],

      babel: {
        plugins: [
          '@babel/plugin-transform-runtime',
          // '@babel/plugin-transform-class-static-block',
          'babel-plugin-transform-typescript-metadata',
          // ['@babel/plugin-transform-private-methods', { loose: true }],
          // ['@babel/plugin-proposal-decorators', { legacy: true, decoratorsBeforeExport: true }],
          // ['@babel/plugin-proposal-class-properties', { loose: true }],
          // ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
        ],
        // presets: [['@babel/preset-env', { loose: true, targets: { node: 'current' } }]],
      },

      buildDir: BUILD_DIR,

      configFilename: 'bundle.ts',

      envFilename: '.env.production',

      envPrefix: ['APP_NAME', 'ENV_PLATFORM', 'NODE_ENV'],

      exclude: [
        ...cartesianString(
          [
            fromPackages(`*/src/**/*.${libraryConfig.params().extension}`),
            fromPackages('*/tests/**/*'),
          ],
          EXTENSIONS_BASE,
        ),
      ],

      extensions,

      include: [...cartesianString([fromPackages('*/src/**/*')], EXTENSIONS_BASE)],

      logSuppressPatterns: [/.*sourcemap.*/i, /.*source map.*/i],

      mainFields: ['module', 'main'],

      packager: 'pnpm',

      rootDirs: [fromRoot(), ...packageDirs.map((path) => fromPackages(path))],

      serverExtension: '.node',

      sourcemap: process.env.NODE_ENV === 'development' ? BUNDLE_SOURCEMAP.INLINE : undefined,

      tempPathname: TEMP_DIR,

      typescript: typescriptConfig.params(),

      // watch: [
      //   fromPackages('asset-static/src/**/*'),
      //   fromPackages('lib-config-js/src/**/*'),
      //   fromPackages('lib-shared-js/src/**/*'),
      //   fromPackages('lib-model-js/src/**/*'),
      //   fromWorking('src/**/*'),
      // ],
    };
  },
});
