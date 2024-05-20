import { fromDist } from '@lib/backend/file/utils/fromDist/fromDist';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { _typescript } from '@lib/config/node/typescript/_typescript';
import { type TypescriptConfigModel } from '@lib/config/node/typescript/typescript.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _typescript,

  config: {
    configFile: fromDist('tsconfig.json'),

    outDir: './out-tsc',

    paths: {
      'css-in-js-utils/lib/*': 'node_modules/css-in-js-utils/es/*',
      'inline-style-prefixer/lib/*': 'node_modules/inline-style-prefixer/es/*',
      'redux-persist/integration/*': 'node_modules/redux-persist/types/integration/*',
    },

    rootDir: fromRoot(),

    types: ['react-native', 'react', 'jest', 'vite/client', '@types/jest-image-snapshot'],
  } satisfies TypescriptConfigModel,
});

export { _config, config };
