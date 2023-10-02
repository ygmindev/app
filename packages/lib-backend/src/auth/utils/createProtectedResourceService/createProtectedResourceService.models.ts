import {
  type CreateEntityResourceServiceModel,
  type CreateEntityResourceServiceParamsModel,
} from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type CreateProtectedResoureServiceParamsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
> = CreateEntityResourceServiceParamsModel<TType, TForm> & {};

export type CreateProtectedResoureServiceModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
> = CreateEntityResourceServiceModel<TType, TForm>;
