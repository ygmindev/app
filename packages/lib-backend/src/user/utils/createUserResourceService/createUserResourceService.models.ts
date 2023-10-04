import { type CreateEntityResourceServiceParamsModel } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService.models';
import { type ClassModel } from '#lib-shared/core/core.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import { type UserResourceModel } from '#lib-shared/auth/resources/UserResource/UserResource.models';

export type CreateUserResourceServiceParamsModel<
  TType extends UserResourceModel,
  TForm = EntityResourceDataModel<TType>,
> = CreateEntityResourceServiceParamsModel<TType, TForm>;

export type CreateUserResourceServiceModel<
  TType extends UserResourceModel,
  TForm = EntityResourceDataModel<TType>,
> = ClassModel<EntityResourceServiceModel<TType, TForm>>;
