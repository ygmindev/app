import {
  type _UseAuthModel,
  type _UseAuthParamsModel,
} from '@lib/frontend/auth/hooks/useAuth/_useAuth.models';

export type UseAuthParamsModel = Omit<_UseAuthParamsModel, 'onError'>;

export type UseAuthModel = _UseAuthModel;
