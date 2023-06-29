import moment from 'moment';

import { type _DateTimeFormatParamsModel } from '#lib-shared/format/utils/dateTimeFormat/_dateTimeFormat.models';

export const _dateTimeFormat = ({ format, value }: _DateTimeFormatParamsModel): string =>
  moment(value).format(format);
