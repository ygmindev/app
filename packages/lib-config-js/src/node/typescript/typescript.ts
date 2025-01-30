import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import fileConfig from '@lib/config/file/file';
import { DIST_DIR } from '@lib/config/file/file.constants';
import pacakgeManagerConfig from '@lib/config/node/packageManager/packageManager';
import { _typescript } from '@lib/config/node/typescript/_typescript';
import {
  type _TypescriptConfigModel,
  type TypescriptConfigModel,
} from '@lib/config/node/typescript/typescript.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { readFileSync } from 'fs';
import reduce from 'lodash/reduce';

export const config = defineConfig<TypescriptConfigModel, _TypescriptConfigModel>({
  config: _typescript,

  params: () => ({
    configFilename: 'tsconfig.json',

    distDir: DIST_DIR,

    outDir: './out-tsc',

    paths: {
      'css-in-js-utils/lib/*': `${pacakgeManagerConfig.params().modulesDir}/css-in-js-utils/es/*`,
      'inline-style-prefixer/lib/*': `${pacakgeManagerConfig.params().modulesDir}/inline-style-prefixer/es/*`,
      'redux-persist/integration/*': `${pacakgeManagerConfig.params().modulesDir}/redux-persist/types/integration/*`,
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
  }),
});

export default config;
