import { type TZDate, TZDateMini } from '@date-fns/tz';
import {
  type _DateTimeModel,
  type _DateTimeParamsModel,
} from '@lib/shared/datetime/utils/DateTime/_DateTime.models';
import { format as _format, isValid, parse } from 'date-fns';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

export class _DateTime implements _DateTimeModel {
  _date!: TZDate;

  constructor(...[value, options]: _DateTimeParamsModel) {
    const tz = options?.tz ?? 'America/New_York';

    let valueF = new TZDateMini();
    if (value instanceof Date) {
      valueF = new TZDateMini(value, tz);
    } else if (isString(value)) {
      valueF = options?.format
        ? parse(value, options.format, new TZDateMini()).withTimeZone(tz)
        : new TZDateMini(value, tz);
    } else if (isPlainObject(value)) {
      valueF = new TZDateMini(
        value?.year ?? valueF.getFullYear(),
        (value?.month ?? valueF.getMonth()) - 1,
        value?.day ?? valueF.getDate(),
        value?.hour ?? valueF.getHours(),
        value?.minute ?? valueF.getMinutes(),
        value?.second ?? valueF.getSeconds(),
        value?.millisecond ?? valueF.getMilliseconds(),
        tz,
      );
    }

    this._date = valueF;
  }

  format(format?: string): string {
    return format ? _format(this._date, format) : this._date.toISOString();
  }

  isValid(): boolean {
    return isValid(this._date);
  }

  get date(): Date {
    return this._date;
  }

  get tz(): string {
    return this._date.timeZone ?? 'America/New_York';
  }

  set tz(value: string) {
    this._date = this._date.withTimeZone(value);
  }
}
