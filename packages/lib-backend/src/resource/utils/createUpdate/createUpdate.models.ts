import { type ClassModel } from '#lib-shared/core/core.models';
import { type UpdateModel } from '#lib-shared/resource/utils/Update/Update.models';

export type CreateUpdateParamsModel<TType> = {
  Resource: TType;
  name: string;
};

export type CreateUpdateModel<TType> = ClassModel<UpdateModel<TType>>;
