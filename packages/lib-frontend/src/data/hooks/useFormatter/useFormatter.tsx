import isDate from 'lodash/isDate';
import isNil from 'lodash/isNil';
import isNumber from 'lodash/isNumber';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import moment from 'moment';

import { AMOUNT_UNIT, RATE_UNIT, RELATIVE_DATE_UNIT } from '#lib-frontend/data/data.constants';
import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import {
  type DateFormatterOptionsModel,
  type FormatterOptionsModel,
  type NumberFormatterOptionsModel,
  type UnformatModel,
  type UseFormatterModel,
} from '#lib-frontend/data/hooks/useFormatter/useFormatter.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { DATA_TYPE, DATA_TYPE_MORE } from '#lib-shared/data/data.constants';
import { type DataTypeModel, type DataTypeMoreModel } from '#lib-shared/data/data.models';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';
import { LOCALE } from '#lib-shared/locale/locale.constants';

export const useFormatter = (): UseFormatterModel => {
  const { t } = useTranslation([LOCALE]);

  const format = <TType,>(value?: TType, options?: FormatterOptionsModel<TType>): string => {
    if (isNil(value)) {
      return '';
    }
    if (isNumber(value)) {
      let valueF = value as number;
      const {
        isScale = true,
        isSeparated = true,
        precision,
        unit,
      } = (options ?? {}) as NumberFormatterOptionsModel;

      // TODO: postfix to translation
      let postfix = '';
      switch (unit) {
        case RATE_UNIT.BASIS_POINT: {
          isScale && (valueF *= 1e4);
          postfix = 'bps';
          break;
        }
        case AMOUNT_UNIT.BILLION: {
          isScale && (valueF /= 1e9);
          postfix = 'bn';
          break;
        }
        case AMOUNT_UNIT.MILLION: {
          isScale && (valueF /= 1e6);
          postfix = 'mm';
          break;
        }
        case RATE_UNIT.PERCENT: {
          isScale && (valueF *= 1e2);
          postfix = '%';
          break;
        }
        case AMOUNT_UNIT.THOUSAND: {
          isScale && (valueF /= 1e3);
          postfix = 'k';
          break;
        }
        // TODO: Day count convention?
        case RELATIVE_DATE_UNIT.DAY: {
          postfix = 'd';
          break;
        }
        case RELATIVE_DATE_UNIT.WEEK: {
          isScale && (valueF *= 7);
          postfix = 'w';
          break;
        }
        case RELATIVE_DATE_UNIT.MONTH: {
          isScale && (valueF *= 30);
          postfix = 'm';
          break;
        }
        case RELATIVE_DATE_UNIT.YEAR: {
          isScale && (valueF *= 365);
          postfix = 'y';
          break;
        }
      }

      return `${
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
      }${postfix}`;
    }
    if (isDate(value)) {
      const { format, isReadable } = (options ?? {}) as DateFormatterOptionsModel;
      if (isReadable) {
        const diff = moment().diff(value, 'days');
        switch (diff) {
          case 1:
            return t('locale:yesterday');
          case 0:
            return t('locale:today');
        }
      }
      return moment(value).format(format ?? 'M/D/YYYY');
    }
    return toString(value);
  };

  const unformat = <TType extends DataTypeModel | DataTypeMoreModel>(
    type: TType,
    value?: string,
    options?: FormatterOptionsModel<UnformatModel<TType>>,
  ): UnformatModel<TType> | undefined => {
    if (!value) {
      return undefined;
    }

    switch (type) {
      case DATA_TYPE.NUMBER:
      case DATA_TYPE_MORE.RELATIVE_DATE: {
        let valueF = toNumber(value.replace(/\D+/g, ''));
        const { isScale = true, unit } = (options ?? {}) as NumberFormatterOptionsModel;
        switch (unit) {
          case RATE_UNIT.BASIS_POINT: {
            isScale && (valueF /= 1e4);
            break;
          }
          case AMOUNT_UNIT.BILLION: {
            isScale && (valueF *= 1e9);
            break;
          }
          case AMOUNT_UNIT.MILLION: {
            isScale && (valueF *= 1e6);
            break;
          }
          case RATE_UNIT.PERCENT: {
            isScale && (valueF /= 1e2);
            break;
          }
          case AMOUNT_UNIT.THOUSAND: {
            isScale && (valueF *= 1e3);
            break;
          }
          case RELATIVE_DATE_UNIT.WEEK: {
            isScale && (valueF /= 7);
            break;
          }
          case RELATIVE_DATE_UNIT.MONTH: {
            isScale && (valueF /= 30);
            break;
          }
          case RELATIVE_DATE_UNIT.YEAR: {
            isScale && (valueF /= 365);
            break;
          }
        }
        return valueF as UnformatModel<TType>;
      }
      case DATA_TYPE.DATE: {
        const { format, isReadable } = (options ?? {}) as DateFormatterOptionsModel;
        if (isReadable) {
          return undefined;
        }
        return moment(value, format).toDate() as UnformatModel<TType>;
      }

      default: {
        return undefined;
      }
    }
  };

  return {
    format,
    formatRange: <TType extends NumberUnitModel>(
      value?: ScaledNumberRangeModel<TType>,
      options?: NumberFormatterOptionsModel,
    ): string => {
      if (value) {
        const { max, min } = value;
        return filterNil([
          min && format(min, { ...options, unit: value.unit }),
          max && format(max, { ...options, unit: value.unit }),
        ]).join(' - ');
      }
      return '';
    },
    unformat,
  };
};
