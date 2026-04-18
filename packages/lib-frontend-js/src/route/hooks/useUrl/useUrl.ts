import { type UseUrlModel } from '@lib/frontend/route/hooks/useUrl/useUrl.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';

export const useUrl = (): UseUrlModel => {
  const update = (params: string, isReplace?: boolean): void => {
    const { href, origin } = window.location;
    const current = trimPathname(href.replace(origin, ''));
    const to = trimPathname(params);
    if (current === to) {
      return;
    }
    (isReplace ? window.history.pushState : window.history.replaceState)(null, '', to);
  };

  return {
    hash: window.location.hash?.replace('#', ''),
    push: (x) => update(x, false),
    replace: (x) => update(x, true),
  };
};
