import { type ReactElement, useState } from 'react';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { Table } from '#lib-frontend/data/components/Table/Table';
import { ResourceFilterForm } from '#lib-frontend/resource/components/ResourceFilterForm/ResourceFilterForm';
import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { type ConnectionModel } from '#lib-shared/resource/utils/Connection/Connection.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const ResourceTable = <TType, TForm = undefined, TRoot = undefined>({
  columns,
  filters,
  service,
  testID,
  ...props
}: SFCPropsModel<ResourceTablePropsModel<TType, TForm, TRoot>>): ReactElement<
  SFCPropsModel<ResourceTablePropsModel<TType, TForm, TRoot>>
> => {
  const { styles } = useStyles({ props });
  const [data, setData] = useState<ConnectionModel<TType> | undefined>();
  const { getConnection } = service;

  const handleFilter = async (data: Array<FilterModel<TType>>): Promise<void> => {
    const result = await getConnection({ filter: data, pagination: { first: 10 } });
    result && setData(result.result);
  };

  return (
    <Wrapper
      grow
      s
      style={styles}
      testID={testID}>
      {filters && (
        <ResourceFilterForm<TType, TForm, TRoot>
          filters={filters}
          onSubmit={handleFilter}
        />
      )}

      <Table
        columns={columns}
        data={data ? data.edges.map((edge) => edge.node) : []}
      />
    </Wrapper>
  );
};
