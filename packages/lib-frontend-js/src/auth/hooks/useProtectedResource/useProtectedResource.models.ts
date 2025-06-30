import { type UseResourceParamsModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type ProtectedResourceModel } from '@lib/model/auth/ProtectedResource/ProtectedResource.models';
import { type ProtectedResourceImplementationModel } from '@lib/model/auth/ProtectedResource/ProtectedResourceImplementation/ProtectedResourceImplementation.models';

export type UseProtectedResourceParamsModel<TType extends ProtectedResourceModel> =
  UseResourceParamsModel<TType>;

export type UseProtectedResourceModel<TType extends ProtectedResourceModel> =
  ProtectedResourceImplementationModel<TType>;
