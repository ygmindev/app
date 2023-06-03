declare module 'esbuild-plugin-fileloc';
declare module 'inquirer-directory';
declare module 'react-native-web';
declare module 'redux-persist-cookie-storage';
declare module 'geolocator';
declare module 'i18next-parser';

declare module '*.css';
declare module '*.ttf';

declare namespace NodeJS {
  import type { EnvironmentConfigModel } from '@lib/config/core/environment/environment.models';
  declare type ProcessEnv = EnvironmentConfigModel;
}
