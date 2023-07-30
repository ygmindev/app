import { useContext } from 'react';

import { ErrorContext } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { type _UseErrorContextModel } from '#lib-frontend/core/hooks/useErrorContext/_useErrorContext.models';

export const _useErrorContext = (): _UseErrorContextModel => {
  const { errorContextSet } = useContext(ErrorContext);
  return { handleError: errorContextSet };
};
