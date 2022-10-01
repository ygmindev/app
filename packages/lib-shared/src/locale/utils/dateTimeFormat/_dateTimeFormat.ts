import type { _DateTimeFormatParamsModel } from '@lib/shared/locale/utils/dateTimeFormat/_dateTimeFormat.models';
import moment from 'moment';

export const _dateTimeFormat = ({ format, value }: _DateTimeFormatParamsModel): string =>
  moment(value).format(format);
