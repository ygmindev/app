import type { _UsePreviousParamsModel } from '@lib/frontend/core/hooks/usePrevious/_usePrevious.models';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { usePreviousDistinct } from 'react-use';

export const _usePrevious = <TType>({ value }: _UsePreviousParamsModel<TType>): TType | undefined =>
  usePreviousDistinct<TType>(value, isEqual);
