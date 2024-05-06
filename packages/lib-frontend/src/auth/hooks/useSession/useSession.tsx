import { _useSession } from '@lib/frontend/auth/hooks/useSession/_useSession';
import {
  type UseSessionModel,
  type UseSessionParamsModel,
} from '@lib/frontend/auth/hooks/useSession/useSession.models';
import { useErrorContext } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { type HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export const useSession = ({ onError }: UseSessionParamsModel = {}): UseSessionModel => {
  const { handleError } = useErrorContext();
  const [isOffline, isOfflineSet] = useStore('app.isOffline');
  return _useSession({
    onError: (e: HttpError) => {
      onError && onError(e);
      e.statusCode === HTTP_STATUS_CODE.NETWORK_CONNECT_TIMEOUT && !isOffline && isOfflineSet(true);
      return handleError(e);
    },
  });
};
