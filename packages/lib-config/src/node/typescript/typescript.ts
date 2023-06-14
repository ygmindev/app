import { fromBuild } from '#lib-backend/file/utils/fromBuild/fromBuild';
import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { toRelative } from '#lib-backend/file/utils/toRelative/toRelative';
import { _typescript } from '#lib-config/node/typescript/_typescript';
import type {
  _TypescriptConfigModel,
  TypescriptConfigModel,
} from '#lib-config/node/typescript/typescript.models';

export const config: TypescriptConfigModel = {
  configFile: fromBuild('tsconfig.json'),

  outDir: fromBuild('out-tsc'),

  paths: {
    '#build/*': toRelative({ from: fromRoot(), to: fromBuild('/*') }),
    'redux-persist/integration/*': 'node_modules/redux-persist/types/integration/*',
  },

  rootDir: fromRoot(),

  types: ['react-native', 'jest', 'vite/client'],
};

export const _config: _TypescriptConfigModel = _typescript(config);
