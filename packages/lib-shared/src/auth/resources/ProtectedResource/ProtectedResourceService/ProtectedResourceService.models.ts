import { type ProtectedResourceModel } from '#lib-shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';

export type ProtectedResourceServiceModel<
  TType extends ProtectedResourceModel,
  TForm = EntityResourceDataModel<TType>,
> = EntityResourceServiceModel<TType, TForm> & {
  getManyProtected: EntityResourceServiceModel<TType, TForm>['getMany'];
};
