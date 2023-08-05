import { SIGN_IN } from '#lib-frontend/auth/auth.constants';
import { type ProtectablePropsModel } from '#lib-frontend/auth/components/Protectable/Protectable.models';
import { useAuthState } from '#lib-frontend/auth/hooks/useAuthState/useAuthState';
import { AUTH_STATE } from '#lib-frontend/auth/hooks/useAuthState/useAuthState.constants';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { Redirect } from '#lib-frontend/route/components/Redirect/Redirect';

export const Protectable: SFCModel<ProtectablePropsModel> = ({ children }) => {
  const authState = useAuthState();
  return authState === AUTH_STATE.UNAUTHENTICATED ? (
    <Redirect pathname={SIGN_IN} />
  ) : (
    <>{children}</>
  );
};
