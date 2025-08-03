import { DATE_TIME_FORMAT_TYPE } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat.constants';
import {
  type _DateTimeParseModel,
  type _DateTimeParseParamsModel,
} from '@lib/shared/data/utils/dateTimeParse/_dateTimeParse.models';
import { parse, parseISO } from 'date-fns';

export const _dateTimeParse = (
  ...[value, format = DATE_TIME_FORMAT_TYPE.DATE]: _DateTimeParseParamsModel
): _DateTimeParseModel => {
  switch (format) {
    case DATE_TIME_FORMAT_TYPE.ISO as string:
      return parseISO(value);
    default:
      return parse(value, format, new Date());
  }
};
