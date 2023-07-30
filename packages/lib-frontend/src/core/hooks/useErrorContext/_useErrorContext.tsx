import { useContext } from 'react';

import { AsyncBoundaryContext } from '#lib-frontend/core/components/AsyncBoundary/AsyncBoundary';
import { type _UseErrorContextModel } from '#lib-frontend/core/hooks/useErrorContext/_useErrorContext.models';

export const _useErrorContext = (): _UseErrorContextModel => {
  const { errorContextSet } = useContext(AsyncBoundaryContext);
  return { handleError: errorContextSet };
};
