import { type ForwardedRef, forwardRef, type ReactElement, useImperativeHandle } from 'react';

import { SkeletonGroup } from '#lib-frontend/animation/components/SkeletonGroup/SkeletonGroup';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { AsyncBoundary } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCPropsModel, type RLFCPropsModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import {
  type DataBoundaryPropsModel,
  type DataBoundaryRefModel,
  type MutateComponentPropsModel,
  type MutateComponentRefModel,
  type QueryComponentPropsModel,
  type QueryComponentRefModel,
} from '#lib-frontend/data/components/DataBoundary/DataBoundary.models';
import { useMutation } from '#lib-frontend/data/hooks/useMutation/useMutation';
import { useQuery } from '#lib-frontend/data/hooks/useQuery/useQuery';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_ROLE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

const QueryComponent = forwardRef(
  <TParams = undefined, TResult = void>(
    {
      children,
      emptyMessage,
      id,
      isBlocking,
      params,
      query,
    }: LFCPropsModel<QueryComponentPropsModel<TParams, TResult>>,
    ref: ForwardedRef<QueryComponentRefModel<TResult>>,
  ): ReactElement<
    RLFCPropsModel<QueryComponentRefModel<TResult>, QueryComponentPropsModel<TParams, TResult>>
  > => {
    const { data, query: queryF } = useQuery<TParams, TResult>(id, query, { isBlocking }, params);

    useImperativeHandle(ref, () => ({ query: queryF }));

    return (
      (children && children({ data })) || (
        <Wrapper
          flex
          isCenter>
          <TranslatableText
            colorRole={THEME_ROLE.MUTED}
            type={FONT_TYPE.HEADLINE}>
            {emptyMessage}
          </TranslatableText>
        </Wrapper>
      )
    );
  },
) as <TParams = undefined, TResult = void>(
  props: RLFCPropsModel<
    QueryComponentRefModel<TResult>,
    QueryComponentPropsModel<TParams, TResult>
  >,
) => ReactElement<
  RLFCPropsModel<QueryComponentRefModel<TResult>, QueryComponentPropsModel<TParams, TResult>>
>;

const MutateComponent = forwardRef(
  <TParams = undefined, TResult = void>(
    {
      children,
      emptyMessage,
      id,
      isBlocking,
      mutate,
    }: LFCPropsModel<MutateComponentPropsModel<TParams, TResult>>,
    ref: ForwardedRef<MutateComponentRefModel<TParams, TResult>>,
  ): ReactElement<
    RLFCPropsModel<
      MutateComponentRefModel<TParams, TResult>,
      MutateComponentPropsModel<TParams, TResult>
    >
  > => {
    const { data, mutate: mutateF } = useMutation<TParams, TResult>(id, mutate, { isBlocking });

    useAsync(async () => mutateF());

    useImperativeHandle(ref, () => ({ mutate: mutateF }));

    return (
      (children && children({ data })) || (
        <Wrapper
          flex
          isCenter>
          <TranslatableText
            colorRole={THEME_ROLE.MUTED}
            type={FONT_TYPE.HEADLINE}>
            {emptyMessage}
          </TranslatableText>
        </Wrapper>
      )
    );
  },
) as <TParams = undefined, TResult = void>(
  props: RLFCPropsModel<
    MutateComponentRefModel<TParams, TResult>,
    MutateComponentPropsModel<TParams, TResult>
  >,
) => ReactElement<
  RLFCPropsModel<
    MutateComponentRefModel<TParams, TResult>,
    MutateComponentPropsModel<TParams, TResult>
  >
>;

export const DataBoundary = forwardRef(
  <TParams = undefined, TResult = void>(
    {
      children,
      elementState,
      emptyMessage = ({ t }) => t('core:nothingToShow'),
      fallbackData,
      id,
      isBlocking,
      mutate,
      params,
      query,
      ...props
    }: LFCPropsModel<DataBoundaryPropsModel<TParams, TResult>>,
    ref?: ForwardedRef<DataBoundaryRefModel<TParams, TResult>>,
  ): ReactElement<
    RLFCPropsModel<DataBoundaryRefModel<TParams, TResult>, DataBoundaryPropsModel<TParams, TResult>>
  > => {
    const { wrapperProps } = useLayoutStyles({ props });
    return (
      <AsyncBoundary
        {...props}
        fallback={
          props.fallback ?? fallbackData ? (
            <SkeletonGroup {...wrapperProps}>
              {children && children({ data: fallbackData, elementState: ELEMENT_STATE.LOADING })}
            </SkeletonGroup>
          ) : undefined
        }>
        {query ? (
          <QueryComponent<TParams, TResult>
            elementState={elementState}
            emptyMessage={emptyMessage}
            id={id}
            isBlocking={isBlocking}
            params={params}
            query={query}
            ref={ref as ForwardedRef<QueryComponentRefModel<TResult>>}>
            {children}
          </QueryComponent>
        ) : mutate ? (
          <MutateComponent<TParams, TResult>
            elementState={elementState}
            emptyMessage={emptyMessage}
            id={id}
            isBlocking={isBlocking}
            mutate={mutate}
            ref={ref as ForwardedRef<MutateComponentRefModel<TParams, TResult>>}>
            {children}
          </MutateComponent>
        ) : null}
      </AsyncBoundary>
    );
  },
) as <TParams = undefined, TResult = void>(
  props: RLFCPropsModel<
    DataBoundaryRefModel<TParams, TResult>,
    DataBoundaryPropsModel<TParams, TResult>
  >,
) => ReactElement<
  RLFCPropsModel<DataBoundaryRefModel<TParams, TResult>, DataBoundaryPropsModel<TParams, TResult>>
>;
