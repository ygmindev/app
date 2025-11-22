import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type PageInfoModel } from '@lib/model/resource/PageInfo/PageInfo.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type PaginatableParamsModel<TType> = {
  name: string;
  Resource(): ResourceClassModel<TType>;
};

export type PaginatableModel<TType> = {
  items: PartialArrayModel<TType>;
  nextCursor?: string;
  pageInfo?: PageInfoModel;
};
