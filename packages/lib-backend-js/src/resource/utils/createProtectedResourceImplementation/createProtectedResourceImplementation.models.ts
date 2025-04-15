import { type CreateEntityResourceImplementationParamsModel } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation.models';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type ProtectedResourceImplementationModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResourceImplementation/ProtectedResourceImplementation.models';
import { type ClassModel } from '@lib/shared/core/core.models';

export type CreateProtectedResoureImplementationParamsModel<TType extends ProtectedResourceModel> =
  CreateEntityResourceImplementationParamsModel<TType> & {
    isAuthored?: boolean;
  };

export type CreateProtectedResoureImplementationModel<TType extends ProtectedResourceModel> =
  ClassModel<ProtectedResourceImplementationModel<TType>>;
