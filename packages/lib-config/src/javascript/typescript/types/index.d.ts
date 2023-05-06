declare module 'esbuild-plugin-fileloc';
declare module 'inquirer-directory';
declare module 'react-native-web';
declare module 'redux-persist-cookie-storage';
declare module 'geolocator';

declare module '*.css';
declare module '*.ttf';

declare namespace NodeJS {
  import type { _EnvironmentConfigModel } from '@lib/config/core/environment/_environment.models';
  declare type ProcessEnv = _EnvironmentConfigModel;
}
