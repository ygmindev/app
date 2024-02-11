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
import toString from 'lodash/toString';

export const numberFormat = (
  ...[value, options = {}]: NumberFormatParamsModel
): NumberFormatModel => {
  if (isNil(value)) {
    return '';
  }
  const { isReverse, isSeparated = true, multiplier, precision, prefix, unit } = options;
  let { postfix } = options;
  const valueF = numberScale(value, { isReverse, multiplier, unit });
  if (!!valueF) {
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
    return `${prefix ?? ''}${
      isSeparated
        ? valueF.toLocaleString(
            'en-US',
            isNil(precision)
              ? undefined
              : { maximumFractionDigits: precision, minimumFractionDigits: precision },
          )
        : isNil(precision)
          ? toString(valueF)
          : valueF.toFixed(precision)
    }${postfix ?? ''}`;
  }
  return '';
};
