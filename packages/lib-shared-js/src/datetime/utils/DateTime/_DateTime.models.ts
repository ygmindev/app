import { type DateTimeOptionsModel } from '@lib/shared/datetime/utils/DateTime/DateTime.models';

export type _DateTimeParamsModel =
  | [
      value?:
        | {
            day?: number;
            hour?: number;
            millisecond?: number;
            minute?: number;
            month?: number;
            second?: number;
            year?: number;
          }
        | Date,
      options?: DateTimeOptionsModel & { format: never },
    ]
  | [value?: string, options?: DateTimeOptionsModel & { format?: string }];

export type _DateTimeModel = {
  format(format?: string): string;
  isValid(): boolean;
  get date(): Date;
  get tz(): string;
  set tz(value: string);
};
