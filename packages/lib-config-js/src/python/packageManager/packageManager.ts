import { type PackageManagerConfigModel } from '@lib/config/python/packageManager/packageManager.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const config = defineConfig<PackageManagerConfigModel>({
  params: () => ({
    fixedVersions: {},

    installCommand: (names, packages, options = {}) =>
      packages
        ? packages
            .map(
              (v) =>
                `cd ${v} && ${
                  names
                    ? `poetry add ${options.isDev ? '--group dev' : ''} ${names}`
                    : 'poetry update'
                }`,
            )
            .join(' && ')
        : '',

    name: 'poetry',

    removeCommand: (names, packages) =>
      `pnpm remove ${packages ? packages.map((v) => `--filter @${v.replace('-', '/')}`).join(' ') : ''} ${names}`,
  }),
});

export default config;
