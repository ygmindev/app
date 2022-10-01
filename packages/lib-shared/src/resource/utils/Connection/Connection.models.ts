import type { Edge, PageInfo } from 'graphql-relay';

export interface EdgeModel<TType> extends Edge<TType> {}

export interface PageInfoModel extends PageInfo {}

export type ConnectionModel<TType> = {
  edges: Array<EdgeModel<TType>>;
  pageInfo: PageInfoModel;
};
