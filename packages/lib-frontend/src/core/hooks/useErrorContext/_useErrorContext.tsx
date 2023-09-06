import { useContext } from 'react';

import { asyncBoundaryContext } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { type _UseErrorContextModel } from '#lib-frontend/core/hooks/useErrorContext/_useErrorContext.models';

export const _useErrorContext = (): _UseErrorContextModel => {
  const { errorContextSet } = useContext(asyncBoundaryContext);
  return { handleError: errorContextSet };
};
