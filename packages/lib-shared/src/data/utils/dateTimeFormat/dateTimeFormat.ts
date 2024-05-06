import { _dateTimeFormat } from '@lib/shared/data/utils/dateTimeFormat/_dateTimeFormat';
import {
  type DateTimeFormatModel,
  type DateTimeFormatParamsModel,
} from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat.models';

export const dateTimeFormat = (
  ...[value, format]: DateTimeFormatParamsModel
): DateTimeFormatModel => _dateTimeFormat(value, format);
