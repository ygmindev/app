// COMPLETE
import { type PlatformModel } from '#lib-platform/core/core.models';
import { type BooleanStringModel } from '#lib-shared/core/core.models';
import { type EnvironmentModel } from '#lib-shared/environment/environment.models';

export type EnvironmentConfigModel = {
  APP_AMPLITUDE_API_KEY: string;
  APP_FIREBASE_API_KEY: string;
  APP_FIREBASE_APP_ID: string;
  APP_FIREBASE_AUTH_DOMAIN: string;
  APP_FIREBASE_PROJECT_ID: string;
  APP_FIREBASE_SENDER_ID: string;
  APP_FIREBASE_STORAGE_BUCKET: string;
  APP_HOST: string;
  APP_IS_DEBUG: BooleanStringModel;
  APP_NAME?: string;
  APP_PORT?: string;
  APP_STRIPE_TOKEN: string;
  APP_TRACKING_NAME: string;
  APP_UPTRACE_SOURCE: string;
  APP_USERNAME: string;
  ENV_NAME: string;
  ENV_PLATFORM: PlatformModel;
  NODE_ENV: EnvironmentModel;
  NODE_OPTIONS?: string;
  SERVER_APP_SECRET: string;
  SERVER_DB_MONGO_NAME: string;
  SERVER_DB_MONGO_PASSWORD: string;
  SERVER_DB_MONGO_URL: string;
  SERVER_DB_MONGO_USERNAME: string;
  SERVER_EMAIL_HOST: string;
  SERVER_EMAIL_PASSWORD: string;
  SERVER_EMAIL_PORT: string;
  SERVER_EMAIL_USERNAME: string;
  SERVER_ENCRYPTION_ALGORITHM: string;
  SERVER_FIREBASE_ADMIN_EMAIL: string;
  SERVER_FIREBASE_ADMIN_PROJECT_ID: string;
  SERVER_FIREBASE_ADMIN_SECRET: string;
  SERVER_HOST: string;
  SERVER_IV_LENGTH: string;
  SERVER_KEY_LENGTH: string;
  SERVER_OTP_LENGTH: number;
  SERVER_OTP_STATIC?: string;
  SERVER_PLAID_CLIENT_ID: string;
  SERVER_PLAID_COUNTRY_CODES: string;
  SERVER_PLAID_ENV: string;
  SERVER_PLAID_PRODUCTS: string;
  SERVER_PLAID_REDIRECT_URI: string;
  SERVER_PLAID_SECRET: string;
  SERVER_PLAID_VERSION: string;
  SERVER_PORT: string;
  SERVER_REGION: string;
  SERVER_SALT_LENGTH: string;
  SERVER_STRIPE_TOKEN: string;
  SERVER_TEST_MATCH?: string;
  SERVER_TWILIO_FROM: string;
  SERVER_TWILIO_SID: string;
  SERVER_TWILIO_TOKEN: string;
  STATIC_HOST: string;
  STATIC_PORT: number;
  TEST_IS_ETE?: BooleanStringModel;
  TEST_MATCH?: string;
  __DEV__: BooleanStringModel;
};
