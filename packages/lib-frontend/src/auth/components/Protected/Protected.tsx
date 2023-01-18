import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import type { ProtectedPropsModel } from '@lib/frontend/auth/components/Protected/Protected.models';
import { useAuthState } from '@lib/frontend/auth/hooks/useAuthState/useAuthState';
import { AUTH_STATE } from '@lib/frontend/auth/hooks/useAuthState/useAuthState.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { RouteContext } from '@lib/frontend/route/providers/RouteProvider/RouteProvider';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useContext } from 'react';

export const Protected: SFCModel<ProtectedPropsModel> = ({ children }) => {
  const authState = useAuthState();
  const { replace } = useRouter();
  const context = useContext(RouteContext);

  if (authState !== AUTH_STATE.AUTHENTICATED) {
    if (isSsr) {
      context.redirect = trimPathname(SIGN_IN);
      context.status = 302;
    } else {
      replace({ pathname: SIGN_IN });
    }
  }

  return <>{children}</>;
};
