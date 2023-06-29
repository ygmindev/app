declare module 'esbuild-plugin-fileloc';
declare module 'geolocator';
declare module 'i18next-parser';
declare module 'inquirer-directory';
declare module 'redux-persist-cookie-storage';

declare module '*.css';
declare module '*.ttf';

declare namespace NodeJS {
  type ProcessEnv =
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    import('#lib-config/core/environment/environment.models').EnvironmentConfigModel;
}
