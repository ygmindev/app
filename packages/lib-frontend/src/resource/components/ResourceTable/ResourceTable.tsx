import { type ReactElement } from 'react';

import { Table } from '#lib-frontend/core/components/Table/Table';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { ResourceFilterForm } from '#lib-frontend/resource/components/ResourceFilterForm/ResourceFilterForm';
import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const ResourceTable = <TType, TForm = undefined, TRoot = undefined>({
  filters,
  name,
  service,
  testID,
  ...props
}: SFCPropsModel<ResourceTablePropsModel<TType, TForm, TRoot>>): ReactElement<
  SFCPropsModel<ResourceTablePropsModel<TType, TForm, TRoot>>
> => {
  const { styles } = useStyles({ props });

  const handleFilter = async (data: FilterModel<TType>): Promise<void> => {
    const result = await service.getConnection({ filter: data, pagination: { first: 10 } });
    console.warn(result);
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
        columns={[
          { id: 'col1', label: 'col 1', width: 50 },
          { id: 'col2', label: 'col 1', width: 50 },
        ]}
        data={[
          { col1: 1, col2: 2 },
          { col1: 1, col2: 3 },
        ]}
      />
    </Wrapper>
  );
};
