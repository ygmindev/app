import { type CreateEntityResourceImplementationParamsModel } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation.models';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type ProtectedResourceImplementationModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResourceImplementation/ProtectedResourceImplementation.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type CreateProtectedResoureImplementationParamsModel<
  TType extends ProtectedResourceModel,
  TForm = EntityResourceDataModel<TType>,
> = CreateEntityResourceImplementationParamsModel<TType, TForm> & {
  isAuthored?: boolean;
};

export type CreateProtectedResoureImplementationModel<
  TType extends ProtectedResourceModel,
  TForm = EntityResourceDataModel<TType>,
> = ClassModel<ProtectedResourceImplementationModel<TType, TForm>>;
