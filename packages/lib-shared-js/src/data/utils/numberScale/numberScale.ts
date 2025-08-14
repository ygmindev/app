import {
  AMOUNT_UNIT,
  OTHER_NUMBER_UNIT,
  RATE_UNIT,
} from '@lib/shared/data/utils/numberFormat/numberFormat.constants';
import {
  type NumberScaleModel,
  type NumberScaleParamsModel,
} from '@lib/shared/data/utils/numberScale/numberScale.models';
import { DATE_UNIT } from '@lib/shared/datetime/datetime.constants';

export const numberScale = (...[value, options = {}]: NumberScaleParamsModel): NumberScaleModel => {
  if (value) {
    let multiplier = options?.multiplier;
    if (!multiplier) {
      switch (options?.unit) {
        case RATE_UNIT.SPREAD: {
          multiplier = 1e4;
          break;
        }
        case AMOUNT_UNIT.BILLION: {
          multiplier = 1e-9;
          break;
        }
        case AMOUNT_UNIT.MILLION: {
          multiplier = 1e-6;
          break;
        }
        case AMOUNT_UNIT.THOUSAND: {
          multiplier = 1e-3;
          break;
        }
        case OTHER_NUMBER_UNIT.PERCENTAGE:
        case RATE_UNIT.YIELD: {
          multiplier = 1e2;
          break;
        }
        case DATE_UNIT.WEEK: {
          multiplier = 1 / 7;
          break;
        }
        // TODO: day count convention
        case DATE_UNIT.MONTH: {
          multiplier = 1 / 30;
          break;
        }
        case DATE_UNIT.YEAR: {
          multiplier = 1 / 365;
          break;
        }
      }
    }
    if (multiplier) {
      return value * (options?.isReverse ? 1 / multiplier : multiplier);
    }
  }
  return value;
};
