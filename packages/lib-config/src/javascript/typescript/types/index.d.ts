declare module 'esbuild-plugin-fileloc';
declare module 'i18next-parser';
declare module 'inquirer-directory';
declare module 'react-native-web';

declare module '*.css';
declare module '*.ttf';

declare namespace NodeJS {
  interface ProcessEnv {
    APP_AMPLITUDE_API_KEY: string;
    APP_FIREBASE_API_KEY: string;
    APP_FIREBASE_APP_ID: string;
    APP_FIREBASE_AUTH_DOMAIN: string;
    APP_FIREBASE_PROJECT_ID: string;
    APP_FIREBASE_SENDER_ID: string;
    APP_FIREBASE_STORAGE_BUCKET: string;
    APP_FIREBASE_USE_EMULATOR: 'true' | 'false';
    APP_SERVER_API_HOST: string;
    APP_SERVER_API_PORT: string;
    APP_STRIPE_TOKEN: string;
    APP_USERNAME: string;
    APP_WEB_ADMIN_HOST: string;
    APP_WEB_ADMIN_PORT: string;
    APP_WEB_HOST: string;
    APP_WEB_PORT: string;
    ENV_NAME: string;
    ENV_PLATFORM: string;
    NODE_ENV: 'development' | 'test' | 'production';
    SERVER_APP_SECRET: string;
    SERVER_EMAIL_HOST: string;
    SERVER_EMAIL_PASSWORD: string;
    SERVER_EMAIL_PORT: string;
    SERVER_EMAIL_USERNAME: string;
    SERVER_ENCRYPTION_ALGORITHM: string;
    SERVER_FIREBASE_ADMIN_EMAIL: string;
    SERVER_FIREBASE_ADMIN_PROJECT_ID: string;
    SERVER_FIREBASE_ADMIN_SECRET: string;
    SERVER_IS_OTP_STATIC?: 'true' | 'false';
    SERVER_IV_LENGTH: string;
    SERVER_KEY_LENGTH: string;
    SERVER_LAMBDA_HOST: string;
    SERVER_LAMBDA_PORT: string;
    SERVER_MONGO_DATABASE_NAME: string;
    SERVER_MONGO_DATABASE_PASSWORD: string;
    SERVER_MONGO_DATABASE_URL: string;
    SERVER_MONGO_DATABASE_USERNAME: string;
    SERVER_PLAID_CLIENT_ID: string;
    SERVER_PLAID_COUNTRY_CODES: string;
    SERVER_PLAID_ENV: string;
    SERVER_PLAID_PRODUCTS: string;
    SERVER_PLAID_REDIRECT_URI: string;
    SERVER_PLAID_SECRET: string;
    SERVER_PLAID_VERSION: string;
    SERVER_REGION: string;
    SERVER_SALT_LENGTH: string;
    SERVER_STRIPE_TOKEN: string;
    SERVER_TEST_MATCH?: string;
  }
}
