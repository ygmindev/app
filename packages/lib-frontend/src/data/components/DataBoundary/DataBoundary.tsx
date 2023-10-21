import { type ReactElement } from 'react';

import { SkeletonGroup } from '#lib-frontend/animation/components/SkeletonGroup/SkeletonGroup';
import { AsyncBoundary } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { type LFCPropsModel, type SFCPropsModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import {
  type DataBoundaryPropsModel,
  type MutateComponentPropsModel,
  type QueryComponentPropsModel,
} from '#lib-frontend/data/components/DataBoundary/DataBoundary.models';
import { useMutation } from '#lib-frontend/data/hooks/useMutation/useMutation';
import { useQuery } from '#lib-frontend/data/hooks/useQuery/useQuery';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

const QueryComponent = <TResult = void,>({
  children,
  id,
  isBlocking,
  query,
}: SFCPropsModel<QueryComponentPropsModel<TResult>>): ReactElement<
  SFCPropsModel<QueryComponentPropsModel<TResult>>
> => {
  const { data } = useQuery(id, query, { isBlocking });
  return (children && children({ data })) || <></>;
};

const MutateComponent = <TParams = undefined, TResult = void>({
  children,
  id,
  isBlocking,
  mutate,
}: SFCPropsModel<MutateComponentPropsModel<TParams, TResult>>): ReactElement<
  SFCPropsModel<MutateComponentPropsModel<TParams, TResult>>
> => {
  const { data, mutate: mutateF } = useMutation<TParams, TResult>(id, mutate, { isBlocking });
  useAsync(async () => mutateF());
  return (children && children({ data })) || <></>;
};

export const DataBoundary = <TParams = undefined, TResult = void>({
  children,
  fallbackData,
  id,
  isBlocking,
  mutate,
  query,
  ...props
}: LFCPropsModel<DataBoundaryPropsModel<TParams, TResult>>): ReactElement<
  LFCPropsModel<DataBoundaryPropsModel<TParams, TResult>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <AsyncBoundary
      {...props}
      fallback={
        props.fallback ?? fallbackData ? (
          <SkeletonGroup {...wrapperProps}>
            {children && children({ data: fallbackData })}
          </SkeletonGroup>
        ) : undefined
      }>
      {query ? (
        <QueryComponent<TResult>
          id={id}
          isBlocking={isBlocking}
          query={query}>
          {children}
        </QueryComponent>
      ) : mutate ? (
        <MutateComponent<TParams, TResult>
          id={id}
          isBlocking={isBlocking}
          mutate={mutate}>
          {children}
        </MutateComponent>
      ) : null}
    </AsyncBoundary>
  );
};
