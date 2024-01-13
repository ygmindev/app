import { type CreateResourceServiceParamsModel } from '@lib-backend/resource/utils/createResourceService/createResourceService.models';
import { type ClassModel } from '@lib-shared/core/core.models';
import { type EntityResourceDataModel } from '@lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type EntityResourceServiceModel } from '@lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import { type ResourceServiceModel } from '@lib-shared/resource/utils/ResourceService/ResourceService.models';

export type CreateEntityResourceServiceParamsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
> = Omit<
  CreateResourceServiceParamsModel<TType, TForm>,
  'count' | keyof ResourceServiceModel<TType, TForm>
>;

export type CreateEntityResourceServiceModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
> = ClassModel<EntityResourceServiceModel<TType, TForm>>;
