import { type _UseQueryContextModel } from '@lib/frontend/data/hooks/useQueryContext/_useQueryContext.models';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

export const _useQueryContext = (): _UseQueryContextModel => {
  const { reset } = useQueryErrorResetBoundary();
  return { handleRefresh: reset };
};
