import type {
  _UsePreviousModel,
  _UsePreviousParamsModel,
} from '@lib/frontend/core/hooks/usePrevious/_usePrevious.models';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { usePreviousDistinct } from 'react-use';

export const _usePrevious = <TType,>({
  value,
}: _UsePreviousParamsModel<TType>): _UsePreviousModel<TType> =>
  usePreviousDistinct<TType>(value, isEqual);
