import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { AsyncBoundary } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
import {
  type DataBoundaryChildProps,
  type DataBoundaryPropsModel,
  type DataBoundaryRefModel,
} from '@lib/frontend/data/components/DataBoundary/DataBoundary.models';
import { useMutation } from '@lib/frontend/data/hooks/useMutation/useMutation';
import { useQuery } from '@lib/frontend/data/hooks/useQuery/useQuery';
import { THEME_ROLE } from '@lib/frontend/style/style.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { type GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import {
  cloneElement,
  type ReactElement,
  type RefObject,
  useImperativeHandle,
  useRef,
} from 'react';

const QueryComponent = <TParams = undefined, TResult = void>({
  children,
  emptyElement,
  id,
  isBlocking,
  params,
  query,
  ref,
}: RLFCPropsModel<
  DataBoundaryRefModel<TResult, GRAPHQL_OPERATION_TYPE.QUERY>,
  DataBoundaryPropsModel<TParams, TResult, GRAPHQL_OPERATION_TYPE.QUERY>
>): ReactElement<
  RLFCPropsModel<
    DataBoundaryRefModel<TResult, GRAPHQL_OPERATION_TYPE.QUERY>,
    DataBoundaryPropsModel<TParams, TResult, GRAPHQL_OPERATION_TYPE.QUERY>
  >
> => {
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
    children?.({
      data,
      onChange: (values) => {
        void setData(values);
      },
      reset,
      setData,
    }) ||
    (emptyElement ?? <></>)
  );
};

const MutateComponent = <TParams = undefined, TResult = void>({
  children,
  emptyElement,
  id,
  isBlocking,
  mutate,
  params,
  ref,
}: RLFCPropsModel<
  DataBoundaryRefModel<TResult, GRAPHQL_OPERATION_TYPE.MUTATION>,
  DataBoundaryPropsModel<TParams, TResult, GRAPHQL_OPERATION_TYPE.MUTATION>
>): ReactElement<
  RLFCPropsModel<
    DataBoundaryRefModel<TResult, GRAPHQL_OPERATION_TYPE.MUTATION>,
    DataBoundaryPropsModel<TParams, TResult, GRAPHQL_OPERATION_TYPE.MUTATION>
  >
> => {
  const {
    data,
    mutate: mutateF,
    reset,
    setData,
  } = useMutation<TParams, TResult>(id, mutate, { isBlocking });

  useAsync(async () => mutateF(params));

  useImperativeHandle(ref, () => ({ getData: () => data, mutate: mutateF, reset, setData }));

  return (
    children?.({
      data,
      onChange: (values) => {
        void setData(values);
      },
      reset,
      setData,
    }) ||
    (emptyElement ?? <></>)
  );
};

export const DataBoundary = <
  TParams = undefined,
  TResult = void,
  TOperation extends GRAPHQL_OPERATION_TYPE = GRAPHQL_OPERATION_TYPE.QUERY,
>({
  children,
  elementState,
  emptyElement,
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
  DataBoundaryRefModel<TResult, TOperation>,
  DataBoundaryPropsModel<TParams, TResult, TOperation>
>): ReactElement<
  RLFCPropsModel<
    DataBoundaryRefModel<TResult, TOperation>,
    DataBoundaryPropsModel<TParams, TResult, TOperation>
  >
> => {
  const refF = useRef<DataBoundaryRefModel<TResult, TOperation>>(null);
  const refFF = ref ?? refF;

  const handleRefresh = async (): Promise<void> => {
    const onRefresh = refFF.current?.query ?? refFF.current?.mutate;
    await onRefresh?.();
  };

  let fallbackF = fallback;
  if (!fallbackF) {
    fallbackF =
      (fallbackData &&
        children?.({
          data: fallbackData,
          elementState: ELEMENT_STATE.LOADING,
          onChange: () => undefined,
        })) ||
      undefined;
    fallbackF = fallbackF
      ? cloneElement(fallbackF, { elementState: ELEMENT_STATE.LOADING })
      : undefined;
  }

  const emptyElementF = emptyElement ?? (
    <Wrapper
      flex
      isCenter>
      <AsyncText
        colorRole={THEME_ROLE.MUTED}
        fontStyle={FONT_STYLE.HEADLINE}>
        {emptyMessage}
      </AsyncText>
    </Wrapper>
  );

  return (
    <AsyncBoundary
      {...props}
      fallback={fallbackF}
      flex
      onRefresh={handleRefresh}>
      {query ? (
        <QueryComponent<TParams, TResult>
          elementState={elementState}
          emptyElement={emptyElementF}
          id={id}
          isBlocking={isBlocking}
          params={params}
          query={async (v) => {
            await sleep();
            return query(v);
          }}
          ref={refFF as RefObject<DataBoundaryRefModel<TResult, GRAPHQL_OPERATION_TYPE.QUERY>>}>
          {children as DataBoundaryChildProps<TResult, GRAPHQL_OPERATION_TYPE.QUERY>}
        </QueryComponent>
      ) : mutate ? (
        <MutateComponent<TParams, TResult>
          elementState={elementState}
          emptyElement={emptyElementF}
          id={id}
          isBlocking={isBlocking}
          mutate={async (v) => {
            await sleep();
            return mutate(v);
          }}
          params={params}
          ref={refFF as RefObject<DataBoundaryRefModel<TResult, GRAPHQL_OPERATION_TYPE.MUTATION>>}>
          {children as DataBoundaryChildProps<TResult, GRAPHQL_OPERATION_TYPE.MUTATION>}
        </MutateComponent>
      ) : (
        emptyElementF
      )}
    </AsyncBoundary>
  );
};
