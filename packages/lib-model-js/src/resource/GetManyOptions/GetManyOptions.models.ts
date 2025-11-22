import { type GetOptionsModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type SortByModel } from '@lib/model/resource/SortBy/SortBy.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';

export type GetManyOptionsModel<TType> = GetOptionsModel<TType> & {
  cursor?: Partial<TType>;
  limit?: number;
  page?: number;
  pageSize?: number;
  populate?: Array<StringKeyModel<TType>>;
  sortBy?: Array<SortByModel<TType>>;
};
