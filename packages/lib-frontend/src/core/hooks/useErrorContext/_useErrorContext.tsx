import type { _UseErrorContextModel } from '@lib/frontend/core/hooks/useErrorContext/_useErrorContext.models';
import { ErrorContext } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider';
import { useContext } from 'react';

export const _useErrorContext = (): _UseErrorContextModel => {
  const { handleError } = useContext(ErrorContext);
  return { handleError };
};
