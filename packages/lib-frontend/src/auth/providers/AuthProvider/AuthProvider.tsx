import { useSession } from '#lib-frontend/auth/hooks/useSession/useSession';
import { type AuthProviderPropsModel } from '#lib-frontend/auth/providers/AuthProvider/AuthProvider.models';
import { type FCModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useUserResource } from '#lib-frontend/user/hooks/useUserResource/useUserResource';

export const AuthProvider: FCModel<AuthProviderPropsModel> = ({ children }) => {
  const { initialize } = useSession();
  const { get } = useUserResource();
  const [currentUser, currentUserSet] = useStore('user.currentUser');

  useAsync(async (isMounted) => {
    void initialize(async (signInToken) => {
      if (isMounted()) {
        if (signInToken && currentUser?._id !== signInToken._id) {
          currentUserSet({ ...signInToken.claims, _id: signInToken._id });
          // const { result } = await get({ filter: [{ field: '_id', value: signInToken._id }] });
          // result && actions?.user.currentUserSet(result);
        } else {
          currentUserSet(null);
        }
      }
    });
  });

  return <>{children}</>;
};
