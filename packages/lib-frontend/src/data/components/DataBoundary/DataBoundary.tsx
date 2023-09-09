import { type ReactElement } from 'react';

import { AsyncBoundary } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import {
  type DataBoundaryPropsModel,
  type MutateComponentPropsModel,
  type QueryComponentPropsModel,
} from '#lib-frontend/data/components/DataBoundary/DataBoundary.models';
import { useMutation } from '#lib-frontend/data/hooks/useMutation/useMutation';
import { useQuery } from '#lib-frontend/data/hooks/useQuery/useQuery';

const QueryComponent = <TResult = void,>({
  _id,
  children,
  query,
}: SFCPropsModel<QueryComponentPropsModel<TResult>>): ReactElement<
  SFCPropsModel<QueryComponentPropsModel<TResult>>
> => {
  const { data } = useQuery(_id, query);
  return (children && children({ data })) || <></>;
};

const MutateComponent = <TParams = undefined, TResult = void>({
  _id,
  children,
  mutate,
}: SFCPropsModel<MutateComponentPropsModel<TParams, TResult>>): ReactElement<
  SFCPropsModel<MutateComponentPropsModel<TParams, TResult>>
> => {
  const { data, mutate: mutateF } = useMutation<TParams, TResult>(_id, mutate);
  useAsync(async () => mutateF());
  return (children && children({ data })) || <></>;
};

export const DataBoundary = <TParams = undefined, TResult = void>({
  _id,
  children,
  mutate,
  query,
  ...props
}: SFCPropsModel<DataBoundaryPropsModel<TParams, TResult>>): ReactElement<
  SFCPropsModel<DataBoundaryPropsModel<TParams, TResult>>
> => (
  <AsyncBoundary {...props}>
    {query ? (
      <QueryComponent<TResult>
        _id={_id}
        query={query}>
        {children}
      </QueryComponent>
    ) : mutate ? (
      <MutateComponent<TParams, TResult>
        _id={_id}
        mutate={mutate}>
        {children}
      </MutateComponent>
    ) : null}
  </AsyncBoundary>
);
