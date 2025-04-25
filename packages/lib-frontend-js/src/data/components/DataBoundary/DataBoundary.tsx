import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { AsyncBoundary } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
import {
  type DataBoundaryPropsModel,
  type DataBoundaryRefModel,
  type MutateComponentPropsModel,
  type MutateComponentRefModel,
  type QueryComponentPropsModel,
  type QueryComponentRefModel,
} from '@lib/frontend/data/components/DataBoundary/DataBoundary.models';
import { useMutation } from '@lib/frontend/data/hooks/useMutation/useMutation';
import { useQuery } from '@lib/frontend/data/hooks/useQuery/useQuery';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_ROLE } from '@lib/frontend/style/style.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import {
  cloneElement,
  type ReactElement,
  type RefObject,
  useImperativeHandle,
  useRef,
} from 'react';

const QueryComponent = <TParams = undefined, TResult = void>({
  children,
  emptyMessage,
  id,
  isBlocking,
  params,
  query,
  ref,
  ...props
}: RLFCPropsModel<
  QueryComponentRefModel<TResult>,
  QueryComponentPropsModel<TParams, TResult>
>): ReactElement<
  RLFCPropsModel<QueryComponentRefModel<TResult>, QueryComponentPropsModel<TParams, TResult>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const {
    data,
    query: queryF,
    reset,
    setData,
  } = useQuery<TParams, TResult>(id, query, params, { isBlocking });

  useImperativeHandle(ref, () => ({
    getData: () => data,
    query: async () => {
      await queryF();
    },
    reset,
    setData,
  }));

  return (
    (children &&
      children({
        data,
        onChange: (values) => {
          void setData(values);
        },
        reset,
        setData,
      })) || (
      <Wrapper
        {...wrapperProps}
        flex
        isCenter>
        <AsyncText
          colorRole={THEME_ROLE.MUTED}
          fontStyle={FONT_STYLE.HEADLINE}>
          {emptyMessage}
        </AsyncText>
      </Wrapper>
    )
  );
};

const MutateComponent = <TParams = undefined, TResult = void>({
  children,
  emptyMessage,
  id,
  isBlocking,
  mutate,
  params,
  ref,
  ...props
}: RLFCPropsModel<
  MutateComponentRefModel<TResult>,
  MutateComponentPropsModel<TParams, TResult>
>): ReactElement<
  RLFCPropsModel<MutateComponentRefModel<TResult>, MutateComponentPropsModel<TParams, TResult>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const {
    data,
    mutate: mutateF,
    reset,
    setData,
  } = useMutation<TParams, TResult>(id, mutate, { isBlocking });

  useAsync(async () => mutateF(params));

  useImperativeHandle(ref, () => ({ getData: () => data, mutate: mutateF, reset, setData }));

  return (
    (children &&
      children({
        data,
        onChange: (values) => {
          void setData(values);
        },
        reset,
        setData,
      })) || (
      <Wrapper
        {...wrapperProps}
        flex
        isCenter>
        <AsyncText
          colorRole={THEME_ROLE.MUTED}
          fontStyle={FONT_STYLE.HEADLINE}>
          {emptyMessage}
        </AsyncText>
      </Wrapper>
    )
  );
};

export const DataBoundary = <TParams = undefined, TResult = void>({
  children,
  elementState,
  emptyMessage = ({ t }) => t('core:nothingToShow'),
  fallback,
  fallbackData,
  id,
  isBlocking,
  mutate,
  params,
  query,
  ref,
  ...props
}: RLFCPropsModel<
  DataBoundaryRefModel<TResult>,
  DataBoundaryPropsModel<TParams, TResult>
>): ReactElement<
  RLFCPropsModel<DataBoundaryRefModel<TResult>, DataBoundaryPropsModel<TParams, TResult>>
> => {
  const refF = useRef<DataBoundaryRefModel<TResult>>(null);
  const refFF = ref ?? refF;

  const handleRefresh = async (): Promise<void> => {
    const onRefresh = refFF.current?.query ?? refFF.current?.mutate;
    await onRefresh?.();
  };

  let fallbackElement = fallback;
  if (!fallbackElement) {
    fallbackElement =
      (fallbackData &&
        children &&
        children({
          data: fallbackData,
          elementState: ELEMENT_STATE.LOADING,
          onChange: () => undefined,
          reset: async () => undefined,
          setData: async () => undefined,
        })) ||
      undefined;
    fallbackElement = fallbackElement
      ? cloneElement(fallbackElement, { elementState: ELEMENT_STATE.LOADING })
      : undefined;
  }

  return (
    <AsyncBoundary
      {...props}
      fallback={fallbackElement}
      flex
      onRefresh={handleRefresh}>
      {query ? (
        <QueryComponent<TParams, TResult>
          elementState={elementState}
          emptyMessage={emptyMessage}
          id={id}
          isBlocking={isBlocking}
          params={params}
          query={async (v) => {
            // TODO: sleep for race condition suspense
            await sleep();
            return query(v);
          }}
          ref={refFF as RefObject<QueryComponentRefModel<TResult>>}>
          {children}
        </QueryComponent>
      ) : mutate ? (
        <MutateComponent<TParams, TResult>
          elementState={elementState}
          emptyMessage={emptyMessage}
          id={id}
          isBlocking={isBlocking}
          mutate={async (v) => {
            // TODO: sleep for race condition suspense
            await sleep();
            return mutate(v);
          }}
          params={params}
          ref={refFF as RefObject<MutateComponentRefModel<TResult>>}>
          {children}
        </MutateComponent>
      ) : null}
    </AsyncBoundary>
  );
};
