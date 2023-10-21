import { type AsyncPropsModel } from '#lib-frontend/data/data.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type _UseQueryOptionsModel = AsyncPropsModel & {
  cache?: boolean | number;
};

export type _UseQueryParamsModel<TType> = [
  id: string,
  query: () => Promise<TType | null>,
  options?: _UseQueryOptionsModel,
];

export type _UseQueryModel<TType> = WithIdModel & {
  data?: TType | null;
  query(): Promise<TType | null>;
};
