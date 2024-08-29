import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { type ProtectablePropsModel } from '@lib/frontend/auth/components/Protectable/Protectable.models';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { type FCModel } from '@lib/frontend/core/core.models';
import { Redirect } from '@lib/frontend/route/components/Redirect/Redirect';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';

export const Protectable: FCModel<ProtectablePropsModel> = ({ children }) => {
  const [authStatus] = useStore('auth.status');
  const [isOffline] = useStore('app.isOffline');
  const { location } = useRouter();
  return !isOffline && authStatus === AUTH_STATUS.UNAUTHENTICATED ? (
    <Redirect
      params={{ redirect: location }}
      pathname={SIGN_IN}
    />
  ) : (
    <>{authStatus !== AUTH_STATUS.UNKNOWN && children}</>
  );
};
