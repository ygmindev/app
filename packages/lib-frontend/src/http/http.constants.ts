import { uri } from '@lib-shared/http/utils/uri/uri';

export const APP_URI = uri({ host: process.env.APP_HOST, port: process.env.APP_PORT });

export enum CONNECTIVITY {
  CELLULAR = 'cellular',

  ETHERNET = 'ethernet',

  OFFLINE = 'offline',

  UNKNOWN = 'unknown',

  WIFI = 'wifi',
}
