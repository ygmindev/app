import { type LFCPropsModel, type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import {
  type ConnectionBoundaryPropsModel,
  type ConnectionBoundaryRefModel,
} from '@lib/frontend/resource/components/ConnectionBoundary/ConnectionBoundary.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { type ForwardedRef, forwardRef, type ReactElement } from 'react';

export const ConnectionBoundary = forwardRef(
  <TType, TRoot = undefined>(
    { children, query, ...props }: LFCPropsModel<ConnectionBoundaryPropsModel<TType, TRoot>>,
    ref: ForwardedRef<ConnectionBoundaryRefModel<TType, TRoot>>,
  ): ReactElement<
    RLFCPropsModel<
      ConnectionBoundaryRefModel<TType, TRoot>,
      ConnectionBoundaryPropsModel<TType, TRoot>
    >
  > => {
    const handleQuery = async (
      params?: InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot> | null> =>
      query ? query(params) : null;
    return (
      <DataBoundary
        {...props}
        query={handleQuery}
        ref={ref}>
        {({ data, elementState, onChange, reset }) =>
          children && children({ data, elementState, onChange, reset })
        }
      </DataBoundary>
    );
  },
) as <TType, TRoot = undefined>(
  props: RLFCPropsModel<
    ConnectionBoundaryRefModel<TType, TRoot>,
    ConnectionBoundaryPropsModel<TType, TRoot>
  >,
) => ReactElement<
  RLFCPropsModel<
    ConnectionBoundaryRefModel<TType, TRoot>,
    ConnectionBoundaryPropsModel<TType, TRoot>
  >
>;
