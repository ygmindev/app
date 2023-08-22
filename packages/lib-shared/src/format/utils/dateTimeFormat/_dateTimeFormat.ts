import moment from 'moment';

import { type _DateTimeFormatParamsModel } from '#lib-shared/format/utils/dateTimeFormat/_dateTimeFormat.models';
import { DATE_TIME_FORMAT_TYPE } from '#lib-shared/format/utils/dateTimeFormat/dateTimeFormat.constants';

export const _dateTimeFormat = (
  { format = DATE_TIME_FORMAT_TYPE.DATE, value }: _DateTimeFormatParamsModel = {
    format: DATE_TIME_FORMAT_TYPE.DATE,
  },
): string => moment(value).format(format);
