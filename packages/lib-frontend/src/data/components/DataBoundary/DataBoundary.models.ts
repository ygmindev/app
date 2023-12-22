import { type ReactElement } from 'react';

import { type AsyncBoundaryPropsModel } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import {
  type ChildrenPropsModel,
  type ElementStatePropsModel,
} from '#lib-frontend/core/core.models';
import { type AsyncPropsModel } from '#lib-frontend/data/data.models';
import { type UseMutationParamsModel } from '#lib-frontend/data/hooks/useMutation/useMutation.models';
import { type UseQueryParamsModel } from '#lib-frontend/data/hooks/useQuery/useQuery.models';
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

export type DataBoundaryRefModel = QueryComponentRefModel & MutateComponentRefModel;

export type QueryComponentPropsModel<TParams = undefined, TResult = void> = WithIdModel &
  AsyncPropsModel &
  ChildrenPropsModel<
    (props: ElementStatePropsModel & { data?: TResult | null }) => ReactElement | NilModel
  > & {
    emptyMessage?: TranslatableTextModel;
    params?: TParams;
    query: UseQueryParamsModel<TParams, TResult>[1];
  };

export type QueryComponentRefModel = {
  query?(): Promise<void>;
};

export type MutateComponentPropsModel<TParams = undefined, TResult = void> = WithIdModel &
  AsyncPropsModel &
  ChildrenPropsModel<
    (props: ElementStatePropsModel & { data?: TResult | null }) => ReactElement | NilModel
  > & {
    emptyMessage?: TranslatableTextModel;
    mutate: UseMutationParamsModel<TParams, TResult>[1];
    params?: TParams;
  };

export type MutateComponentRefModel = {
  mutate?(): Promise<void>;
};
