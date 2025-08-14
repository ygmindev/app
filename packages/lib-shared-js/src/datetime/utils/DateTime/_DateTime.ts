import { TZDate, TZDateMini } from '@date-fns/tz';
import { TIMEZONE_DEFAULT } from '@lib/config/locale/internationalize/internationalize.constants';
import {
  type _DateTimeModel,
  type _DateTimeParamsModel,
} from '@lib/shared/datetime/utils/DateTime/_DateTime.models';
import { format as _format, isValid, parse } from 'date-fns';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

export class _DateTime extends TZDate implements _DateTimeModel {
  constructor(...[value, options]: _DateTimeParamsModel) {
    const tz = options?.tz ?? TIMEZONE_DEFAULT;

    let date = new TZDateMini();
    if (value instanceof Date) {
      date = new TZDateMini(value, tz);
    } else if (isString(value)) {
      date = options?.format
        ? parse(value, options.format, new TZDateMini()).withTimeZone(tz)
        : new TZDateMini(value, tz);
    } else if (isPlainObject(value)) {
      date = new TZDateMini(
        value?.year ?? date.getFullYear(),
        (value?.month ?? date.getMonth()) - 1,
        value?.day ?? date.getDate(),
        value?.hour ?? date.getHours(),
        value?.minute ?? date.getMinutes(),
        value?.second ?? date.getSeconds(),
        value?.millisecond ?? date.getMilliseconds(),
        tz,
      );
    }

    super(date.getTime());
  }

  format(format?: string): string {
    return format ? _format(this, format) : this.toISOString();
  }

  isValid(): boolean {
    return isValid(this);
  }

  get tz(): string {
    return this.timeZone ?? TIMEZONE_DEFAULT;
  }

  set tz(value: string) {
    Object.assign(this, this.withTimeZone(value));
  }
}
