import { type ReactElement } from 'react';

import { type AsyncBoundaryPropsModel } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type AsyncPropsModel } from '#lib-frontend/data/data.models';
import { type UseMutationParamsModel } from '#lib-frontend/data/hooks/useMutation/useMutation.models';
import { type UseQueryParamsModel } from '#lib-frontend/data/hooks/useQuery/useQuery.models';
import { type NilModel, type PartialModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type DataBoundaryPropsModel<TParams = undefined, TResult = void> = Omit<
  AsyncBoundaryPropsModel,
  'children'
> &
  WithIdModel &
  PartialModel<QueryComponentPropsModel<TResult> & MutateComponentPropsModel<TParams, TResult>> & {
    fallbackData?: TResult;
  };

export type QueryComponentPropsModel<TResult = void> = WithIdModel &
  AsyncPropsModel &
  ChildrenPropsModel<(props: { data?: TResult | null }) => ReactElement | NilModel> & {
    query: UseQueryParamsModel<TResult>[1];
  };

export type MutateComponentPropsModel<TParams = undefined, TResult = void> = WithIdModel &
  AsyncPropsModel &
  ChildrenPropsModel<(props: { data?: TResult | null }) => ReactElement | NilModel> & {
    mutate: UseMutationParamsModel<TParams, TResult>[1];
  };
