import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type AsyncBoundaryPropsModel } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import {
  type ChildrenPropsModel,
  type ElementStatePropsModel,
} from '@lib/frontend/core/core.models';
import { type AsyncPropsModel } from '@lib/frontend/data/data.models';
import { type UseMutationParamsModel } from '@lib/frontend/data/hooks/useMutation/useMutation.models';
import { type UseQueryParamsModel } from '@lib/frontend/data/hooks/useQuery/useQuery.models';
import { type NilModel, type PartialModel, type RequiredModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export type DataBoundaryPropsModel<TParams = undefined, TResult = void> = Omit<
  AsyncBoundaryPropsModel,
  'children'
> &
  WithIdModel &
  PartialModel<
    QueryComponentPropsModel<TParams, TResult> & MutateComponentPropsModel<TParams, TResult>
  > & { fallbackData?: TResult };

export type DataBoundaryRefModel<TResult = void> = QueryComponentRefModel<TResult> &
  MutateComponentRefModel<TResult>;

export type DataComponentPropsModel<TParams = undefined, TResult = void> = WithIdModel &
  AsyncPropsModel &
  ChildrenPropsModel<
    (
      props: ElementStatePropsModel &
        RequiredModel<Pick<DataComponentRefModel<TResult>, 'reset' | 'setData'>> & {
          data?: TResult | null;
          onChange(values?: TResult): void;
        },
    ) => ReactElement<ElementStatePropsModel> | NilModel
  > & {
    emptyMessage?: AsyncTextModel;
    params?: TParams;
  };

export type DataComponentRefModel<TResult = void> = {
  getData(): TResult | null | undefined;
  reset?(): Promise<void>;
  setData?(values?: TResult): Promise<void>;
};

export type QueryComponentPropsModel<TParams = undefined, TResult = void> = DataComponentPropsModel<
  TParams,
  TResult
> & { query: UseQueryParamsModel<TParams, TResult>[1] };

export type QueryComponentRefModel<TResult = void> = DataComponentRefModel<TResult> & {
  query?(): Promise<void>;
};

export type MutateComponentPropsModel<
  TParams = undefined,
  TResult = void,
> = DataComponentPropsModel<TParams, TResult> & {
  mutate: UseMutationParamsModel<TParams, TResult>[1];
};

export type MutateComponentRefModel<TResult = void> = DataComponentRefModel<TResult> & {
  mutate?(): Promise<void>;
};
