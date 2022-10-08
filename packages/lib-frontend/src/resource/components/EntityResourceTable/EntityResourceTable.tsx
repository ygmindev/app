import { Table } from '@lib/frontend/core/components/Table/Table';
import { TABLE_SELECT_TYPE } from '@lib/frontend/core/components/Table/Table.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { useQueryConnection } from '@lib/frontend/core/hooks/useQueryConnection/useQueryConnection';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { ENTITY_RESOURCE_TABLE_LIMIT } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.constants';
import type { EntityResourceTablePropsModel } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.models';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { RESOURCE, RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import { reduce } from 'lodash';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

export const EntityResourceTable = <TType extends EntityResourceModel, TForm>({
  columns,
  fields,
  name,
  testID,
  limit = ENTITY_RESOURCE_TABLE_LIMIT,
  ...props
}: EntityResourceTablePropsModel<TType, TForm>): ReactElement<
  EntityResourceTablePropsModel<TType, TForm>
> => {
  const { styles } = useStyles({ props });
  useTranslation([RESOURCE]);

  const [selected, setSelected] = useState<Array<TType> | undefined>();

  const { query: getConnection } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET_CONNECTION,
    TType,
    TForm
  >({ fields, method: RESOURCE_METHOD_TYPE.GET_CONNECTION, name });

  const { data, queryNext } = useQueryConnection<TType>({
    id: `${name}${RESOURCE_METHOD_TYPE.GET_CONNECTION}`,
    limit,
    query: async (params) => {
      const { result } = await getConnection({
        filter: {},
        pagination: params || { first: limit },
      });
      return result || null;
    },
  });

  useEffect(() => {
    queryNext();
  }, []);

  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <Table<TType>
        columns={columns}
        data={reduce<ConnectionModel<TType> | null, Array<TType>>(
          data?.pages,
          (result, page) => [...result, ...(page?.edges.map(({ node }) => node) || [])],
          [],
        )}
        onSelect={setSelected}
        select={TABLE_SELECT_TYPE.SINGLE}
      />
    </Wrapper>
  );
};
