import { type UseResourceParamsModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type ProtectedResourceImplementationModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResourceImplementation/ProtectedResourceImplementation.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type UseProtectedResourceParamsModel<
  TType extends ProtectedResourceModel,
  TForm = EntityResourceDataModel<TType>,
> = UseResourceParamsModel<TType, TForm>;

export type UseProtectedResourceModel<
  TType extends ProtectedResourceModel,
  TForm = EntityResourceDataModel<TType>,
> = ProtectedResourceImplementationModel<TType, TForm>;
