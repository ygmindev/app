import { appUri } from '@lib/shared/http/utils/appUri/appUri';

export const APP_URI = appUri();

export enum CONNECTIVITY {
  CELLULAR = 'cellular',

  ETHERNET = 'ethernet',

  OFFLINE = 'offline',

  UNKNOWN = 'unknown',

  WIFI = 'wifi',
}
