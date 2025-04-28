import { PACAKGE_INSTALL_MODE } from '@lib/config/node/packageManager/packageManager.constants';
import { type PackageManagerConfigModel } from '@lib/config/node/packageManager/packageManager.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<PackageManagerConfigModel>({
  params: () => ({
    fixedVersions: {
      '@types/eslint': '^8.56.11',
      eslint: '^8.56.0',
    },

    installCommand: (names, packages, options = {}) =>
      `corepack use pnpm@latest && ${
        names && packages
          ? `pnpm add ${packages ? packages.map((v) => `--filter @${v.replace('-js', '').replace('-', '/')}`).join(' ') : ''} ${options.mode === PACAKGE_INSTALL_MODE.DEV ? '-D' : options.mode === PACAKGE_INSTALL_MODE.PEER ? '--save-peer' : ''} ${names}`
          : 'pnpm install --shamefully-hoist'
      }`,

    modulesDir: 'node_modules',

    name: 'pnpm',

    removeCommand: (names, packages) =>
      `pnpm remove ${packages ? packages.map((v) => `--filter @${v.replace('-js', '').replace('-', '/')}`).join(' ') : ''} ${names}`,
  }),
});

export default config;
