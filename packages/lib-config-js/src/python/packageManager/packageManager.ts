import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { type PackageManagerConfigModel } from '@lib/config/python/packageManager/packageManager.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const config = defineConfig<PackageManagerConfigModel>({
  params: () => ({
    // TODO: ignore fixed versions
    fixedVersions: {},

    installCommand: (names, packages, options = {}) => {
      const pwd = fromWorking();
      const command = packages
        ? packages
            .map(
              (v) =>
                `cd ${fromPackages(v)} && ${
                  names
                    ? `poetry add ${options.isDev ? '--group dev' : ''} ${names}`
                    : 'poetry update'
                }`,
            )
            .join(' && ')
        : '';
      return `${command} && cd ${pwd}`;
    },

    name: 'poetry',

    pythonVersionCommand: (version, packages) => {
      const pwd = fromWorking();
      const command = packages
        ? packages
            .map((v) => `cd ${fromPackages(v)} && poetry env use ${version} && poetry update`)
            .join(' && ')
        : '';
      return `${command} && cd ${pwd}`;
    },

    removeCommand: (names, packages) => {
      const pwd = fromWorking();
      const command = packages
        ? packages.map((v) => `cd ${fromPackages(v)} && poetry remove ${names}`).join(' && ')
        : '';
      return `${command} && cd ${pwd}`;
    },
  }),
});

export default config;
