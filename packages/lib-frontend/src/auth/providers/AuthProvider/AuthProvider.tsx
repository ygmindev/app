import { useSession } from '#lib-frontend/auth/hooks/useSession/useSession';
import { type AuthProviderPropsModel } from '#lib-frontend/auth/providers/AuthProvider/AuthProvider.models';
import { type FCModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useUserResource } from '#lib-frontend/user/hooks/useUserResource/useUserResource';

export const AuthProvider: FCModel<AuthProviderPropsModel> = ({ children }) => {
  const actions = useActions();
  const { initialize } = useSession();
  const { get } = useUserResource();
  const [currentUser] = useStore('user.currentUser');

  useAsync(async (isMounted) => {
    void initialize(async (signInToken) => {
      if (isMounted()) {
        if (signInToken && currentUser?._id !== signInToken._id) {
          actions?.user.currentUser({ ...signInToken.claims, _id: signInToken._id });
          // const { result } = await get({ filter: [{ field: '_id', value: signInToken._id }] });
          // result && actions?.user.currentUserSet(result);
        } else {
          actions?.user.currentUser(null);
        }
      }
    });
  });

  return <>{children}</>;
};
