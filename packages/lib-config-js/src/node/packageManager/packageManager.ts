import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { TEMP_DIR } from '@lib/config/file/file.constants';
import {
  MODULES_DIR,
  PACAKGE_INSTALL_MODE,
} from '@lib/config/node/packageManager/packageManager.constants';
import { type PackageManagerConfigModel } from '@lib/config/node/packageManager/packageManager.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { uid } from '@lib/shared/core/utils/uid/uid';

export const config = defineConfig<PackageManagerConfigModel>({
  params: () => ({
    // fixedVersions: {
    //   eslint: '^8.56.0',
    // },

    installCommand: (names, packages, options = {}) =>
      `corepack use pnpm@latest && ${
        names && packages
          ? `pnpm add ${packages ? packages.map((v) => `--filter @${v.replace('-js', '').replace('-', '/')}`).join(' ') : ''} ${options.mode === PACAKGE_INSTALL_MODE.DEV ? '-D' : options.mode === PACAKGE_INSTALL_MODE.PEER ? '--save-peer' : ''} ${names}`
          : 'pnpm install --shamefully-hoist'
      }`,

    listCommand: (pkg) => `pnpm list --json --recursive --depth 0 --filter ${pkg}`,

    modulesDir: MODULES_DIR,

    name: 'pnpm',

    patchCommand: (pkg, dirname) => `pnpm patch ${pkg} --edit-dir ${dirname}`,

    patchCommitCommand: (dirname) => `pnpm patch-commit ${dirname}`,

    patchDir: (pkg) => fromWorking(MODULES_DIR, TEMP_DIR, `${pkg.replace(/\//g, '-')}-${uid()}`),

    removeCommand: (names, packages) =>
      `pnpm remove ${packages ? packages.map((v) => `--filter @${v.replace('-js', '').replace('-', '/')}`).join(' ') : ''} ${names}`,
  }),
});

export default config;
