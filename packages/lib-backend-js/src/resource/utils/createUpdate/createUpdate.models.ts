import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';

export type CreateUpdateParamsModel<TType> = {
  Resource(): ResourceClassModel<TType>;
  name: string;
};

export type CreateUpdateModel<TType> = ResourceClassModel<UpdateModel<TType>>;
