import { PACAKGE_INSTALL_MODE } from '@lib/config/node/packageManager/packageManager.constants';
import { type PackageManagerConfigModel } from '@lib/config/node/packageManager/packageManager.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const config = defineConfig<PackageManagerConfigModel>({
  params: () => ({
    fixedVersions: {
      '@types/eslint': '^8.56.11',
      '@types/inquirer': '^8.2.2',
      '@types/react': '^18.3.1',
      '@types/react-dom': '^18.3.1',
      eslint: '^8.56.0', // eslint9 flat config incompatible
      inquirer: '^8.2.2',
      'p-queue': '^6.6.2', // no commonjs
      react: '^18.3.1', // TODO: react 19 incompatible with RNW until merge: https://github.com/necolas/react-native-web/pull/2731
      'react-dom': '^18.3.1',
      'react-native': '^0.73.7', // TODO: wait for react-native-reanimated to release with RNRenderer, and upgrade rn, rnvi, rnw
      'react-native-vector-icons': '^9.2.0', // 10.0.0 incompatible with createAnimatedComponent
      'react-native-web': '^0.18.12', // 0.19 results in no icon color animation
      // typescript: '4.7.4',
    },

    installCommand: (names, packages, options = {}) =>
      names && packages
        ? `pnpm self-update && pnpm add ${packages ? packages.map((v) => `--filter @${v.replace('-js', '').replace('-', '/')}`).join(' ') : ''} ${options.mode === PACAKGE_INSTALL_MODE.DEV ? '-D' : options.mode === PACAKGE_INSTALL_MODE.PEER ? '--save-peer' : ''} ${names}`
        : 'pnpm self-update && pnpm install --shamefully-hoist',

    modulesDir: 'node_modules',

    name: 'pnpm',

    removeCommand: (names, packages) =>
      `pnpm remove ${packages ? packages.map((v) => `--filter @${v.replace('-js', '').replace('-', '/')}`).join(' ') : ''} ${names}`,
  }),
});

export default config;
