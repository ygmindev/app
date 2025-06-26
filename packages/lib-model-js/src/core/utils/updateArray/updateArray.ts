import {
  type UpdateArrayModel,
  type UpdateArrayParamsModel,
} from '@lib/shared/core/utils/updateArray/updateArray.models';
import clone from 'lodash/clone';
import isNumber from 'lodash/isNumber';

export const updateArray = <TType extends unknown>(
  ...[
    value,
    selector,
    update,
    { isClone = true, isUpsert = false } = {},
  ]: UpdateArrayParamsModel<TType>
): UpdateArrayModel<TType> => {
  const valueF = value ? (isClone ? clone(value) : value) : [];
  const index = isNumber(selector) ? selector : valueF.findIndex(selector);
  if (index >= 0) {
    const v = update(valueF[index]);
    v && (valueF[index] = v);
  } else if (isUpsert) {
    const v = update();
    v && valueF.push(v);
  }
  return valueF;
};
