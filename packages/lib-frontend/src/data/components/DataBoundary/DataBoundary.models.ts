import { type ReactElement } from 'react';

import { type AsyncBoundaryPropsModel } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type AsyncPropsModel } from '#lib-frontend/data/data.models';
import {
  type UseMutationModel,
  type UseMutationParamsModel,
} from '#lib-frontend/data/hooks/useMutation/useMutation.models';
import {
  type UseQueryModel,
  type UseQueryParamsModel,
} from '#lib-frontend/data/hooks/useQuery/useQuery.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type NilModel, type PartialModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type DataBoundaryPropsModel<TParams = undefined, TResult = void> = Omit<
  AsyncBoundaryPropsModel,
  'children'
> &
  WithIdModel &
  PartialModel<
    QueryComponentPropsModel<TParams, TResult> & MutateComponentPropsModel<TParams, TResult>
  > & {
    fallbackData?: TResult;
  };

export type DataBoundaryRefModel<TParams = undefined, TResult = void> =
  | QueryComponentRefModel<TParams, TResult>
  | MutateComponentRefModel<TParams, TResult>;

export type QueryComponentPropsModel<TParams = undefined, TResult = void> = WithIdModel &
  AsyncPropsModel &
  ChildrenPropsModel<(props: { data?: TResult | null }) => ReactElement | NilModel> & {
    emptyMessage?: TranslatableTextModel;
    query: UseQueryParamsModel<TParams, TResult>[1];
  };

export type QueryComponentRefModel<TParams = undefined, TResult = void> = Pick<
  UseQueryModel<TParams, TResult>,
  'query' | 'paramsSet'
>;

export type MutateComponentPropsModel<TParams = undefined, TResult = void> = WithIdModel &
  AsyncPropsModel &
  ChildrenPropsModel<(props: { data?: TResult | null }) => ReactElement | NilModel> & {
    emptyMessage?: TranslatableTextModel;
    mutate: UseMutationParamsModel<TParams, TResult>[1];
  };

export type MutateComponentRefModel<TParams = undefined, TResult = void> = Pick<
  UseMutationModel<TParams, TResult>,
  'mutate'
>;
