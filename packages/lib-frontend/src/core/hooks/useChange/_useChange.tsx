import type {
  _UseChangeModel,
  _UseChangeParamsModel,
} from '@lib/frontend/core/hooks/useChange/_useChange.models';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { usePreviousDistinct } from 'react-use';

export const _useChange = <TType,>({
  value,
}: _UseChangeParamsModel<TType>): _UseChangeModel<TType> =>
  usePreviousDistinct<TType>(value, isEqual);
