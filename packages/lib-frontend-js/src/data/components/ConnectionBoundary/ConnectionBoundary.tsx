import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import {
  type ConnectionBoundaryPropsModel,
  type ConnectionBoundaryRefModel,
} from '@lib/frontend/data/components/ConnectionBoundary/ConnectionBoundary.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { type ReactElement } from 'react';

export const ConnectionBoundary = <TType, TRoot = undefined>({
  children,
  id,
  isBlocking,
  params,
  query,
  ...props
}: RLFCPropsModel<
  ConnectionBoundaryRefModel<TType, TRoot>,
  ConnectionBoundaryPropsModel<TType, TRoot>
>): ReactElement<
  RLFCPropsModel<
    ConnectionBoundaryRefModel<TType, TRoot>,
    ConnectionBoundaryPropsModel<TType, TRoot>
  >
> => (
  <DataBoundary
    {...props}
    id={id}
    isBlocking={isBlocking}
    params={params}
    query={query}>
    {({ data, elementState, onChange, reset, setData }) =>
      children && children({ data, elementState, onChange, reset, setData })
    }
  </DataBoundary>
);
