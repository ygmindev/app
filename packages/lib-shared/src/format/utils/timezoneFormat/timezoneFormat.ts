import isString from 'lodash/isString';
import startCase from 'lodash/startCase';

import type {
  TimezoneFormatModel,
  TimezoneFormatParamsModel,
} from '#lib-shared/format/utils/timezoneFormat/timezoneFormat.models';

export const timezoneFormat = (params: TimezoneFormatParamsModel): TimezoneFormatModel =>
  isString(params)
    ? params.replace('_', ' ').split('/').map(startCase).join('/')
    : `${timezoneFormat(params.name)} (UTC${params.offset < 0 ? '-' : '+'}${Math.abs(
        params.offset,
      )}:00)`;
