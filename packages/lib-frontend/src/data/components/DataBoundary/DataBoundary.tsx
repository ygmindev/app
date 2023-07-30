import { type ReactElement } from 'react';

import { AsyncBoundary } from '#lib-frontend/core/components/AsyncBoundary/AsyncBoundary';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { type DataBoundaryPropsModel } from '#lib-frontend/data/components/DataBoundary/DataBoundary.models';
import { useQuery } from '#lib-frontend/data/hooks/useQuery/useQuery';

type DataComponentPropsModel<TType> = Pick<
  DataBoundaryPropsModel<TType>,
  'children' | 'id' | 'query'
>;

const DataComponent = <TType,>({
  children,
  id,
  query,
}: SFCPropsModel<DataComponentPropsModel<TType>>): ReactElement<
  SFCPropsModel<DataComponentPropsModel<TType>>
> => {
  const { data } = useQuery(id, query);
  return (children && children({ data })) || <></>;
};

export const DataBoundary = <TType,>({
  children,
  id,
  query,
  ...props
}: SFCPropsModel<DataBoundaryPropsModel<TType>>): ReactElement<
  SFCPropsModel<DataBoundaryPropsModel<TType>>
> => {
  return (
    <AsyncBoundary {...props}>
      <DataComponent
        id={id}
        query={query}>
        {children}
      </DataComponent>
    </AsyncBoundary>
  );
};
