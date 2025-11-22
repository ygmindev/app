import { type ResourceClassModel } from '@lib/backend/resource/resource.models';

export type FormParamsModel<TType> = {
  name: string;
  Resource(): ResourceClassModel<TType>;
};

export type FormModel<TType> = Partial<TType>;
