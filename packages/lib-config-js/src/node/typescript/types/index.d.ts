export {};

declare module '@bunchtogether/vite-plugin-flow';
declare module 'eslint-plugin-import';
declare module 'eslint-plugin-sort-destructure-keys';
declare module 'eslint-plugin-sort-keys-fix';
declare module 'eslint-plugin-typescript-sort-keys';
declare module 'flow-remove-types';
declare module 'geolocator';
declare module 'globals';
declare module 'i18next-parser';
declare module 'react-native-draglist';
declare module 'react-native-web';
declare module 'redux-persist-cookie-storage';

declare module '*.css';
declare module '*.ttf';

declare namespace NodeJS {
  type ProcessEnv =
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    import('@lib/config/environment/environment.models').EnvironmentConfigModel;
}

declare global {
  function __CLIENT_ONLY__<TType>(value: TType): TType | undefined;
  function __SERVER_ONLY__<TType>(value: TType): TType | undefined;
}
