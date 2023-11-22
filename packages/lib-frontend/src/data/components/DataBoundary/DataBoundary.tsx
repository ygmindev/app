import { type ForwardedRef, forwardRef, type ReactElement, useImperativeHandle } from 'react';

import { SkeletonGroup } from '#lib-frontend/animation/components/SkeletonGroup/SkeletonGroup';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { AsyncBoundary } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary';
import {
  type LFCPropsModel,
  type RLFCPropsModel,
  type SFCPropsModel,
} from '#lib-frontend/core/core.models';
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
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_ROLE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { isEmpty } from '#lib-shared/core/utils/isEmpty/isEmpty';

const QueryComponent = forwardRef(
  <TParams = undefined, TResult = void>(
    {
      children,
      emptyMessage,
      id,
      isBlocking,
      query,
    }: SFCPropsModel<QueryComponentPropsModel<TParams, TResult>>,
    ref: ForwardedRef<QueryComponentRefModel<TParams, TResult>>,
  ): ReactElement<SFCPropsModel<QueryComponentPropsModel<TParams, TResult>>> => {
    const {
      data,
      paramsSet,
      query: queryF,
    } = useQuery<TParams, TResult>(id, query, { isBlocking });

    useImperativeHandle(ref, () => ({ paramsSet, query: queryF }));
    return isEmpty(data) ? (
      <Wrapper
        flex
        isCenter>
        <TranslatableText
          colorRole={THEME_ROLE.MUTED}
          type={FONT_TYPE.HEADLINE}>
          {emptyMessage}
        </TranslatableText>
      </Wrapper>
    ) : (
      (children && children({ data })) || <></>
    );
  },
) as <TParams = undefined, TResult = void>(
  props: RLFCPropsModel<
    QueryComponentRefModel<TParams, TResult>,
    QueryComponentPropsModel<TParams, TResult>
  >,
) => ReactElement<
  RLFCPropsModel<
    QueryComponentRefModel<TParams, TResult>,
    QueryComponentPropsModel<TParams, TResult>
  >
>;

const MutateComponent = forwardRef(
  <TParams = undefined, TResult = void>(
    {
      children,
      emptyMessage,
      id,
      isBlocking,
      mutate,
    }: SFCPropsModel<MutateComponentPropsModel<TParams, TResult>>,
    ref: ForwardedRef<MutateComponentRefModel<TParams, TResult>>,
  ): ReactElement<SFCPropsModel<MutateComponentPropsModel<TParams, TResult>>> => {
    const { data, mutate: mutateF } = useMutation<TParams, TResult>(id, mutate, { isBlocking });

    useAsync(async () => mutateF());

    useImperativeHandle(ref, () => ({ mutate: mutateF }));

    return (
      (isEmpty(data) ? (
        <Wrapper
          flex
          isCenter>
          <TranslatableText
            colorRole={THEME_ROLE.MUTED}
            type={FONT_TYPE.HEADLINE}>
            {emptyMessage}
          </TranslatableText>
        </Wrapper>
      ) : (
        children && children({ data })
      )) || <></>
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
      emptyMessage = ({ t }) => t('core:nothingToShow'),
      fallbackData,
      id,
      isBlocking,
      mutate,
      query,
      ...props
    }: LFCPropsModel<DataBoundaryPropsModel<TParams, TResult>>,
    ref?: ForwardedRef<DataBoundaryRefModel<TParams, TResult>>,
  ): ReactElement<LFCPropsModel<DataBoundaryPropsModel<TParams, TResult>>> => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { t } = useTranslation();
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
          <QueryComponent<TParams, TResult>
            emptyMessage={emptyMessage}
            id={id}
            isBlocking={isBlocking}
            query={query}
            ref={ref as ForwardedRef<QueryComponentRefModel<TParams, TResult>>}>
            {children}
          </QueryComponent>
        ) : mutate ? (
          <MutateComponent<TParams, TResult>
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
