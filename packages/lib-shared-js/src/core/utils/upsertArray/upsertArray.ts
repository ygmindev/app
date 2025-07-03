import {
  type UpdateArrayModel,
  type UpdateArrayParamsModel,
} from '@lib/shared/core/utils/updateArray/updateArray.models';
import cloneDeep from 'lodash/cloneDeep';
import isNumber from 'lodash/isNumber';

export const updateArray = <TType extends unknown>(
  ...[value, selector, update, { isClone = true } = {}]: UpdateArrayParamsModel<TType>
): UpdateArrayModel<TType> => {
  const valueF = value ? (isClone ? cloneDeep(value) : value) : [];
  const index = isNumber(selector) ? selector : valueF.findIndex(selector);
  if (index >= 0) {
    valueF[index] = update(valueF[index]) ?? valueF[index];
  }
  return valueF;
};
