import { type EdgeModel } from '#lib-shared/resource/utils/Edge/Edge.models';
import { type PageInfoModel } from '#lib-shared/resource/utils/PageInfo/PageInfo.models';

export type ConnectionModel<TType> = {
  edges: Array<EdgeModel<TType>>;
  pageInfo: PageInfoModel;
};
