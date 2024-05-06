import { type AsyncBoundaryPropsModel } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import {
  type AsyncTextModel,
  type ChildrenPropsModel,
  type ElementStatePropsModel,
} from '@lib/frontend/core/core.models';
import { type AsyncPropsModel } from '@lib/frontend/data/data.models';
import { type UseMutationParamsModel } from '@lib/frontend/data/hooks/useMutation/useMutation.models';
import { type UseQueryParamsModel } from '@lib/frontend/data/hooks/useQuery/useQuery.models';
import { type NilModel, type PartialModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

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

export type DataBoundaryRefModel<TResult = void> = QueryComponentRefModel<TResult> &
  MutateComponentRefModel<TResult>;

export type QueryComponentPropsModel<TParams = undefined, TResult = void> = WithIdModel &
  AsyncPropsModel &
  ChildrenPropsModel<
    (props: ElementStatePropsModel & { data?: TResult | null }) => ReactElement | NilModel
  > & {
    emptyMessage?: AsyncTextModel;
    params?: TParams;
    query: UseQueryParamsModel<TParams, TResult>[1];
  };

export type QueryComponentRefModel<TResult = void> = {
  getData(): TResult | null | undefined;
  query?(): Promise<void>;
  reset?(): Promise<void>;
  setData?(values?: TResult): void;
};

export type MutateComponentPropsModel<TParams = undefined, TResult = void> = WithIdModel &
  AsyncPropsModel &
  ChildrenPropsModel<
    (props: ElementStatePropsModel & { data?: TResult | null }) => ReactElement | NilModel
  > & {
    emptyMessage?: AsyncTextModel;
    mutate: UseMutationParamsModel<TParams, TResult>[1];
    params?: TParams;
  };

export type MutateComponentRefModel<TResult = void> = {
  getData(): TResult | null | undefined;
  mutate?(): Promise<void>;
  reset?(): Promise<void>;
  setData?(values?: TResult): void;
};
