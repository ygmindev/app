import { DATE_UNIT, DATE_UNIT_MORE, TIME_UNIT } from '@lib/shared/datetime/datetime.constants';
import {
  type _DateTimeAddModel,
  type _DateTimeAddParamsModel,
} from '@lib/shared/datetime/utils/dateTimeAdd/_dateTimeAdd.models';
import { add, addBusinessDays } from 'date-fns';

export const _dateTimeAdd = (...[params, values]: _DateTimeAddParamsModel): _DateTimeAddModel => {
  let result = add(params, {
    days: values[DATE_UNIT.DAY],
    hours: values[TIME_UNIT.HOUR],
    minutes: values[TIME_UNIT.MINUTE],
    months: values[DATE_UNIT.MONTH],
    seconds: values[TIME_UNIT.SECONDS],
    weeks: values[DATE_UNIT.WEEK],
    years: values[DATE_UNIT.YEAR],
  });
  values[DATE_UNIT_MORE.BUSINESS_DAY] &&
    (result = addBusinessDays(result, values[DATE_UNIT_MORE.BUSINESS_DAY]));
  return result;
};
