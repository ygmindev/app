import {
  type CreateEntityResourceServiceModel,
  type CreateEntityResourceServiceParamsModel,
} from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService.models';
import { type ProtectedResourceModel } from '#lib-shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type CreateProtectedResoureServiceParamsModel<
  TType extends ProtectedResourceModel,
  TForm = EntityResourceDataModel<TType>,
> = CreateEntityResourceServiceParamsModel<TType, TForm>;

export type CreateProtectedResoureServiceModel<
  TType extends ProtectedResourceModel,
  TForm = EntityResourceDataModel<TType>,
> = CreateEntityResourceServiceModel<TType, TForm>;