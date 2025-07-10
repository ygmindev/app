import { _useAuth } from '@lib/frontend/auth/hooks/useAuth/_useAuth';
import {
  type UseAuthModel,
  type UseAuthParamsModel,
} from '@lib/frontend/auth/hooks/useAuth/useAuth.models';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { type HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export const useAuth = ({ ...props }: UseAuthParamsModel): UseAuthModel => {
  const [isOffline, isOfflineSet] = useStore('app.isOffline');
  const [, authStatusSet] = useStore('auth.status');

  _useAuth({
    ...props,
    onError: (e) => {
      (e as HttpError).statusCode === HTTP_STATUS_CODE.NETWORK_CONNECT_TIMEOUT &&
        !isOffline &&
        isOfflineSet(true);
      authStatusSet(AUTH_STATUS.UNAUTHENTICATED);
      throw e;
    },
  });
};
