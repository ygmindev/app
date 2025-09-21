import { _dateTimeAdd } from '@lib/shared/datetime/utils/dateTimeAdd/_dateTimeAdd';
import {
  type DateTimeAddModel,
  type DateTimeAddParamsModel,
} from '@lib/shared/datetime/utils/dateTimeAdd/dateTimeAdd.models';

export const dateTimeAdd = (...params: DateTimeAddParamsModel): DateTimeAddModel =>
  _dateTimeAdd(...params);
