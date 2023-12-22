import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import { type _UseQueryContextModel } from '#lib-frontend/data/hooks/useQueryContext/_useQueryContext.models';

export const _useQueryContext = (): _UseQueryContextModel => {
  const { reset } = useQueryErrorResetBoundary();
  return { handleRefresh: reset };
};
