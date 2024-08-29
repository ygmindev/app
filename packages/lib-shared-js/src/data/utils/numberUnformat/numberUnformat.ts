import { numberScale } from '@lib/shared/data/utils/numberScale/numberScale';
import {
  type NumberUnformatModel,
  type NumberUnformatParamsModel,
} from '@lib/shared/data/utils/numberUnformat/numberUnformat.models';
import toNumber from 'lodash/toNumber';

export const numberUnformat = ([
  value,
  options = {},
]: NumberUnformatParamsModel): NumberUnformatModel => {
  if (!value) {
    return undefined;
  }
  const { isReverse, multiplier, unit } = options;
  const valueF = toNumber(value.replace(/\D+/g, ''));
  return numberScale(valueF, { isReverse, multiplier, unit });
};
