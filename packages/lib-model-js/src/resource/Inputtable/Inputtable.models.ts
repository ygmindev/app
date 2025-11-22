import { type ResourceClassModel } from '@lib/backend/resource/resource.models';

export type InputtableParamsModel<TType> = {
  name: string;
  Resource(): ResourceClassModel<TType>;
};

export type InputtableModel<TType> = Partial<TType>;
