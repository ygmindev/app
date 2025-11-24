import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { fileConfig } from '@lib/config/file/file';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { packageManagerConfig } from '@lib/config/node/packageManager/packageManager';
import { _typescript } from '@lib/config/node/typescript/_typescript';
import {
  type _TypescriptConfigModel,
  type TypescriptConfigModel,
} from '@lib/config/node/typescript/typescript.models';
import { Config } from '@lib/config/utils/Config/Config';
import { readFileSync } from 'fs';
import reduce from 'lodash/reduce';

export const typescriptConfig = new Config<TypescriptConfigModel, _TypescriptConfigModel>({
  config: _typescript,

  params: () => {
    const { modulesDir } = packageManagerConfig.params();
    return {
      configFilename: 'tsconfig.json',

      outPathname: fromWorking(BUILD_DIR, './out-tsc'),

      paths: {
        // 'css-in-js-utils/lib/*': `${modulesDir}/css-in-js-utils/es/*`,
        // 'inline-style-prefixer/lib/*': `${modulesDir}/inline-style-prefixer/es/*`,
        'redux-persist/integration/*': `${modulesDir}/redux-persist/types/integration/*`,
        ...reduce(
          fileConfig.params().packageDirs,
          (result, v) => {
            const packageJson = JSON.parse(
              readFileSync(fromPackages(v, 'package.json')).toString(),
            ) as { name: string };
            return { ...result, [`${packageJson.name}/*`]: `packages/${v}/src/*` };
          },
          {},
        ),
      },

      rootDir: fromRoot(),

      types: ['react-native', 'react', 'jest', 'vite/client', '@types/jest-image-snapshot'],
    };
  },
});
