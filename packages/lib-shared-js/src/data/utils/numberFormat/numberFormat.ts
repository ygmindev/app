import {
  AMOUNT_UNIT,
  OTHER_NUMBER_UNIT,
  RATE_UNIT,
  RELATIVE_DATE_UNIT,
} from '@lib/shared/data/utils/numberFormat/numberFormat.constants';
import {
  type NumberFormatModel,
  type NumberFormatParamsModel,
} from '@lib/shared/data/utils/numberFormat/numberFormat.models';
import { numberScale } from '@lib/shared/data/utils/numberScale/numberScale';
import isNil from 'lodash/isNil';

export const numberFormat = (
  ...[value, options = {}]: NumberFormatParamsModel
): NumberFormatModel => {
  if (isNil(value)) {
    return '';
  }
  const { currency, isReverse, isSeparated = true, multiplier, precision, prefix, unit } = options;
  let { postfix } = options;
  const valueF = numberScale(value, { isReverse, multiplier, unit });
  if (valueF) {
    if (!postfix) {
      // TODO: postfix to translation
      switch (unit) {
        case RATE_UNIT.SPREAD: {
          postfix = 'bps';
          break;
        }
        case AMOUNT_UNIT.BILLION: {
          postfix = 'bn';
          break;
        }
        case AMOUNT_UNIT.MILLION: {
          postfix = 'mm';
          break;
        }
        case OTHER_NUMBER_UNIT.PERCENTAGE:
        case RATE_UNIT.YIELD: {
          postfix = '%';
          break;
        }
        case AMOUNT_UNIT.THOUSAND: {
          postfix = 'k';
          break;
        }
        case RELATIVE_DATE_UNIT.DAY: {
          postfix = 'd';
          break;
        }
        case RELATIVE_DATE_UNIT.WEEK: {
          postfix = 'w';
          break;
        }
        case RELATIVE_DATE_UNIT.MONTH: {
          postfix = 'm';
          break;
        }
        case RELATIVE_DATE_UNIT.YEAR: {
          postfix = 'y';
          break;
        }
      }
    }
    const localeOptions: Intl.NumberFormatOptions = {};
    if (precision) {
      localeOptions.maximumFractionDigits = precision;
      localeOptions.minimumFractionDigits = precision;
    }
    if (isSeparated) {
      localeOptions.useGrouping = true;
    }
    if (currency) {
      localeOptions.style = 'currency';
      localeOptions.currency = currency;
    }
    return `${prefix ?? ''}${valueF.toLocaleString('en-US', localeOptions)}${postfix ?? ''}`;
  }
  return '';
};
