import {
  type TimezoneFormatModel,
  type TimezoneFormatParamsModel,
} from '@lib/shared/datetime/utils/timezoneFormat/timezoneFormat.models';
import isString from 'lodash/isString';
import startCase from 'lodash/startCase';

export const timezoneFormat = (params: TimezoneFormatParamsModel): TimezoneFormatModel =>
  isString(params)
    ? params.replace('_', ' ').split('/').map(startCase).join('/')
    : `${timezoneFormat(params.name)} (UTC${params.offset < 0 ? '-' : '+'}${Math.abs(
        params.offset,
      )}:00)`;
