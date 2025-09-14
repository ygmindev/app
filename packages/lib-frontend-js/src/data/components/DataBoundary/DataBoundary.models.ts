import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type AsyncBoundaryPropsModel } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type ChildPropsModel, type ElementStatePropsModel } from '@lib/frontend/core/core.models';
import { type AsyncPropsModel } from '@lib/frontend/data/data.models';
import { type UseMutationParamsModel } from '@lib/frontend/data/hooks/useMutation/useMutation.models';
import { type UseQueryParamsModel } from '@lib/frontend/data/hooks/useQuery/useQuery.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { type ReactElement } from 'react';

export type DataBoundaryPropsModel<
  TParams = undefined,
  TResult = void,
  TOperation extends GRAPHQL_OPERATION_TYPE = GRAPHQL_OPERATION_TYPE.QUERY,
> = Omit<AsyncBoundaryPropsModel, 'children'> &
  WithIdModel &
  AsyncPropsModel &
  (TOperation extends GRAPHQL_OPERATION_TYPE.MUTATION
    ? { mutate: UseMutationParamsModel<TParams, TResult>[1]; query?: never }
    : { mutate?: never; query: UseQueryParamsModel<TParams, TResult>[1] }) &
  ChildPropsModel<DataBoundaryChildProps<TResult, TOperation>> & {
    emptyElement?: ReactElement;
    emptyMessage?: AsyncTextModel;
    fallbackData?: TResult;
    params?: TParams;
  };

export type DataBoundaryChildProps<
  TResult = void,
  TOperation extends GRAPHQL_OPERATION_TYPE = GRAPHQL_OPERATION_TYPE.QUERY,
> = (
  props: ElementStatePropsModel &
    Pick<DataBoundaryRefModel<TResult, TOperation>, 'reset' | 'setData'> & {
      data?: TResult | null;
      onChange(values?: TResult): void;
    },
) => ReactElement<ElementStatePropsModel> | null;

export type DataBoundaryRefModel<
  TResult = void,
  TOperation extends GRAPHQL_OPERATION_TYPE = GRAPHQL_OPERATION_TYPE.QUERY,
> = (TOperation extends GRAPHQL_OPERATION_TYPE.MUTATION
  ? { query?: never; mutate?(): Promise<void> }
  : { mutate?: never; query?(): Promise<void> }) & {
  getData(): TResult | null | undefined;
  reset?(): Promise<void>;
  setData?(values?: TResult): Promise<void>;
};
