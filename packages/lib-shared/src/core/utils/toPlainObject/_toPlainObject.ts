import toPlainObject from 'lodash/toPlainObject';

import {
  type _ToPlainObjectModel,
  type _ToPlainObjectParamsModel,
} from '@lib-shared/core/utils/toPlainObject/_toPlainObject.models';

export const _toPlainObject = <TType extends unknown>(
  params: _ToPlainObjectParamsModel<TType>,
): _ToPlainObjectModel<TType> => toPlainObject(params) as _ToPlainObjectModel<TType>;
