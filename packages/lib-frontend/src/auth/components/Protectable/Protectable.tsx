import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import type { ProtectablePropsModel } from '@lib/frontend/auth/components/Protectable/Protectable.models';
import { useAuthState } from '@lib/frontend/auth/hooks/useAuthState/useAuthState';
import { AUTH_STATE } from '@lib/frontend/auth/hooks/useAuthState/useAuthState.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { rootContext } from '@lib/frontend/root/providers/ContextProvider/ContextProvider';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { isSsr } from '@lib/platform/core/utils/isSsr/isSsr';
import { useContext } from 'react';

export const Protectable: SFCModel<ProtectablePropsModel> = ({ children }) => {
  const authState = useAuthState();
  const currentUser = useStore((state) => state.user.currentUser);
  const { replace } = useRouter();
  const context = useContext(rootContext);
  if (authState === AUTH_STATE.UNAUTHENTICATED) {
    if (isSsr && context.route) {
      context.route.redirect = trimPathname(SIGN_IN);
      context.route.status = 302;
    } else {
      replace({ pathname: SIGN_IN });
    }
  }

  return <>{currentUser && children}</>;
};
