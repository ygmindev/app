import isDate from 'lodash/isDate';
import isNil from 'lodash/isNil';
import isNumber from 'lodash/isNumber';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import moment from 'moment';

import { AMOUNT_UNIT, RATE_UNIT, RELATIVE_DATE_UNIT } from '#lib-frontend/data/data.constants';
import {
  type DateFormatterOptionsModel,
  type FormatterOptionsModel,
  type NumberFormatterOptionsModel,
  type NumberScaleOptionsModel,
  type UnformatModel,
  type UseFormatterModel,
} from '#lib-frontend/data/hooks/useFormatter/useFormatter.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { DATA_TYPE, DATA_TYPE_MORE } from '#lib-shared/data/data.constants';
import { type DataTypeModel, type DataTypeMoreModel } from '#lib-shared/data/data.models';
import { LOCALE } from '#lib-shared/locale/locale.constants';

export const useFormatter = (): UseFormatterModel => {
  const { t } = useTranslation([LOCALE]);

  const scale = (value?: number, options?: NumberScaleOptionsModel): number | undefined => {
    if (value) {
      let multiplier = 1;
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
        case RATE_UNIT.YIELD: {
          multiplier = 1e2;
          break;
        }
        case RELATIVE_DATE_UNIT.WEEK: {
          multiplier = 1 / 7;
          break;
        }
        // TODO: day count convention
        case RELATIVE_DATE_UNIT.MONTH: {
          multiplier = 1 / 30;
          break;
        }
        case RELATIVE_DATE_UNIT.YEAR: {
          multiplier = 1 / 365;
          break;
        }
      }
      return value * (options?.isUnscale ? 1 / multiplier : multiplier);
    }
    return value;
  };

  const format = <TType,>(value?: TType, options?: FormatterOptionsModel<TType>): string => {
    if (isNil(value)) {
      return '';
    }
    if (isNumber(value)) {
      const {
        isScale = true,
        isSeparated = true,
        isUnscale,
        precision,
        unit,
      } = (options ?? {}) as NumberFormatterOptionsModel;

      const valueF = isScale ? scale(value, { isUnscale, unit }) : value;

      if (!!valueF) {
        // TODO: postfix to translation
        let postfix = '';
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
      return '';
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
        const {
          isScale = true,
          isUnscale = true,
          unit,
        } = (options ?? {}) as NumberFormatterOptionsModel;

        const valueF = toNumber(value.replace(/\D+/g, ''));
        return (isScale ? scale(valueF, { isUnscale, unit }) : valueF) as UnformatModel<TType>;
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

    formatRange: (value, options) => {
      if (value) {
        const { max, min } = value;
        return filterNil([min && format(min, options), max && format(max, options)]).join(' - ');
      }
      return '';
    },

    scale,

    unformat,
  };
};
