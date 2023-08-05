import { SIGN_IN } from '#lib-frontend/auth/auth.constants';
import { type ProtectablePropsModel } from '#lib-frontend/auth/components/Protectable/Protectable.models';
import { useAuthState } from '#lib-frontend/auth/hooks/useAuthState/useAuthState';
import { AUTH_STATE } from '#lib-frontend/auth/hooks/useAuthState/useAuthState.constants';
import { type SignInPageParamsModel } from '#lib-frontend/auth/pages/SignInPage/SignInPage.models';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { Redirect } from '#lib-frontend/route/components/Redirect/Redirect';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';

export const Protectable: SFCModel<ProtectablePropsModel> = ({ children }) => {
  const authState = useAuthState();
  const { location } = useRouter();
  return authState === AUTH_STATE.UNAUTHENTICATED ? (
    <Redirect<SignInPageParamsModel>
      params={{ redirectTo: location.params?.previous }}
      pathname={SIGN_IN}
    />
  ) : (
    <>{authState !== AUTH_STATE.UNKNOWN && children}</>
  );
};
