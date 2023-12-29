import {
  cloneElement,
  type ForwardedRef,
  forwardRef,
  type ReactElement,
  type RefObject,
  useImperativeHandle,
  useRef,
} from 'react';

import { SkeletonGroup } from '#lib-frontend/animation/components/SkeletonGroup/SkeletonGroup';
import { Loading } from '#lib-frontend/core/components/Loading/Loading';
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
      ...props
    }: LFCPropsModel<QueryComponentPropsModel<TParams, TResult>>,
    ref: ForwardedRef<QueryComponentRefModel>,
  ): ReactElement<
    RLFCPropsModel<QueryComponentRefModel, QueryComponentPropsModel<TParams, TResult>>
  > => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { data, query: queryF } = useQuery<TParams, TResult>(id, query, { isBlocking }, params);

    useImperativeHandle(ref, () => ({
      query: async () => {
        await queryF();
      },
    }));

    return (
      (children && children({ data })) || (
        <Wrapper
          {...wrapperProps}
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
  props: RLFCPropsModel<QueryComponentRefModel, QueryComponentPropsModel<TParams, TResult>>,
) => ReactElement<
  RLFCPropsModel<QueryComponentRefModel, QueryComponentPropsModel<TParams, TResult>>
>;

const MutateComponent = forwardRef(
  <TParams = undefined, TResult = void>(
    {
      children,
      emptyMessage,
      id,
      isBlocking,
      mutate,
      params,
      ...props
    }: LFCPropsModel<MutateComponentPropsModel<TParams, TResult>>,
    ref: ForwardedRef<MutateComponentRefModel>,
  ): ReactElement<
    RLFCPropsModel<MutateComponentRefModel, MutateComponentPropsModel<TParams, TResult>>
  > => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { data, mutate: mutateF } = useMutation<TParams, TResult>(
      id,
      mutate,
      { isBlocking },
      params,
    );

    useAsync(async () => mutateF());

    useImperativeHandle(ref, () => ({ mutate: mutateF }));

    return (
      (children && children({ data })) || (
        <Wrapper
          {...wrapperProps}
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
  props: RLFCPropsModel<MutateComponentRefModel, MutateComponentPropsModel<TParams, TResult>>,
) => ReactElement<
  RLFCPropsModel<MutateComponentRefModel, MutateComponentPropsModel<TParams, TResult>>
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
    ref?: ForwardedRef<DataBoundaryRefModel>,
  ): ReactElement<
    RLFCPropsModel<DataBoundaryRefModel, DataBoundaryPropsModel<TParams, TResult>>
  > => {
    const refF = useRef<DataBoundaryRefModel>(null);
    const refFF = (ref ?? refF) as RefObject<DataBoundaryRefModel>;

    const handleRefresh = async (): Promise<void> => {
      const onRefresh = refFF.current?.query ?? refFF.current?.mutate;
      onRefresh && (await onRefresh());
    };

    const childrenF = props.fallback ??
      (fallbackData && children && children({ data: fallbackData })) ?? (
        <Wrapper
          flex
          isCenter>
          <Loading />
        </Wrapper>
      );

    return (
      <AsyncBoundary
        {...props}
        fallback={
          <SkeletonGroup>
            {childrenF && cloneElement(childrenF, { elementState: ELEMENT_STATE.LOADING })}
          </SkeletonGroup>
        }
        flex
        onRefresh={handleRefresh}>
        {query ? (
          <QueryComponent<TParams, TResult>
            elementState={elementState}
            emptyMessage={emptyMessage}
            id={id}
            isBlocking={isBlocking}
            params={params}
            query={query}
            ref={refFF as ForwardedRef<QueryComponentRefModel>}>
            {children}
          </QueryComponent>
        ) : mutate ? (
          <MutateComponent<TParams, TResult>
            elementState={elementState}
            emptyMessage={emptyMessage}
            id={id}
            isBlocking={isBlocking}
            mutate={mutate}
            params={params}
            ref={refFF as ForwardedRef<MutateComponentRefModel>}>
            {children}
          </MutateComponent>
        ) : null}
      </AsyncBoundary>
    );
  },
) as <TParams = undefined, TResult = void>(
  props: RLFCPropsModel<DataBoundaryRefModel, DataBoundaryPropsModel<TParams, TResult>>,
) => ReactElement<RLFCPropsModel<DataBoundaryRefModel, DataBoundaryPropsModel<TParams, TResult>>>;
