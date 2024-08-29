import {
  type _UseChangeModel,
  type _UseChangeParamsModel,
} from '@lib/frontend/core/hooks/useChange/_useChange.models';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { usePreviousDistinct } from 'react-use';

export const _useChange = <TType extends unknown>(
  params: _UseChangeParamsModel<TType>,
): _UseChangeModel<TType> => usePreviousDistinct<TType>(params, isEqual);
