import { type Edge, type PageInfo } from 'graphql-relay';

export type EdgeModel<TType> = Edge<TType>;

export type PageInfoModel = PageInfo;

export type ConnectionModel<TType> = {
  edges: Array<EdgeModel<TType>>;
  pageInfo: PageInfoModel;
};
