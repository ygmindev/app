declare module 'geolocator';
declare module 'i18next-parser';
declare module 'inquirer-directory';
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
