import { type UseUrlModel } from '@lib/frontend/route/hooks/useUrl/useUrl.models';

export const useUrl = (): UseUrlModel => ({
  hash: undefined,
  push: (params) => {},
  replace: (params) => {},
});
