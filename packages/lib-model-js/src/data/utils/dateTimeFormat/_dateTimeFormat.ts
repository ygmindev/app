import {
  type _DateTimeFormatModel,
  type _DateTimeFormatParamsModel,
} from '@lib/shared/data/utils/dateTimeFormat/_dateTimeFormat.models';
import { DATE_TIME_FORMAT_TYPE } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat.constants';
import { format as formatF } from 'date-fns';

export const _dateTimeFormat = (
  ...[value, format = DATE_TIME_FORMAT_TYPE.DATE]: _DateTimeFormatParamsModel
): _DateTimeFormatModel => value && formatF(value, format);
