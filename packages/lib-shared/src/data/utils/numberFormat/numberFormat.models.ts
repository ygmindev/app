import {
  type AMOUNT_UNIT,
  type NUMBER_UNIT_TYPE,
  type OTHER_NUMBER_UNIT,
  type RATE_UNIT,
  type RELATIVE_DATE_UNIT,
} from '@lib/shared/data/utils/numberFormat/numberFormat.constants';
import { type NumberScaleOptionsModel } from '@lib/shared/data/utils/numberScale/numberScale.models';

export type NumberFormatParamsModel = [value?: number, options?: NumberFormatOptionsModel];

export type NumberFormatModel = string | undefined;

export type AmountUnitModel = `${AMOUNT_UNIT}`;

export type RateUnitModel = `${RATE_UNIT}`;

export type OtherNumberUnitModel = `${OTHER_NUMBER_UNIT}`;

export type RelativeDateUnitModel = `${RELATIVE_DATE_UNIT}`;

export type NumberUnitTypeModel = `${NUMBER_UNIT_TYPE}`;

export type NumberUnitModel =
  | AmountUnitModel
  | RateUnitModel
  | RelativeDateUnitModel
  | OtherNumberUnitModel;

export type NumberFormatOptionsModel = NumberScaleOptionsModel & {
  currency?: string;
  isSeparated?: boolean;
  postfix?: string;
  precision?: number;
  prefix?: string;
};
