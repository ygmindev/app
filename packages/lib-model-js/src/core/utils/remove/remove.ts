import {
  type RemoveModel,
  type RemoveParamsModel,
} from '@lib/shared/core/utils/remove/remove.models';
import clone from 'lodash/clone';
import findIndex from 'lodash/findIndex';
import isNumber from 'lodash/isNumber';

export const remove = <TType extends Array<unknown>>(
  ...[value, selector, isFirstOnly = false]: RemoveParamsModel<TType>
): RemoveModel<TType> => {
  const valueF = clone(value);
  if (isNumber(selector)) {
    valueF.splice(selector, 1);
    return valueF;
  }
  if (isFirstOnly) {
    const index = findIndex(valueF, selector);
    index >= 0 && valueF.splice(index, 1);
    return valueF;
  }
  return valueF.filter(selector) as TType;
};
