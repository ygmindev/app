import { _dateTimeParse } from '@lib/shared/data/utils/dateTimeParse/_dateTimeParse';
import {
  type DateTimeParseModel,
  type DateTimeParseParamsModel,
} from '@lib/shared/data/utils/dateTimeParse/dateTimeParse.models';

export const dateTimeParse = (...params: DateTimeParseParamsModel): DateTimeParseModel =>
  _dateTimeParse(...params);
