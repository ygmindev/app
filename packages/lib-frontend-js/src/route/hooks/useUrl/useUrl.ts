import { type UseUrlModel } from '@lib/frontend/route/hooks/useUrl/useUrl.models';

export const useUrl = (): UseUrlModel => ({
  hash: window.location.hash?.replace('#', ''),
  push: (params) => window.history.pushState(null, '', params),
  replace: (params) => window.history.pushState(null, '', params),
});
