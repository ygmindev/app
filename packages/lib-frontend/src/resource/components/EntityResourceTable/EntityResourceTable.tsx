import { Table } from '@lib/frontend/core/components/Table/Table';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { useQuery } from '@lib/frontend/core/hooks/useQuery/useQuery';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { ENTITY_RESOURCE_TABLE_NROWS } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.constants';
import type { EntityResourceTablePropsModel } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.models';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { RESOURCE, RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { ReactElement } from 'react';
import { useState } from 'react';

export const EntityResourceTable = <TType extends EntityResourceModel, TForm>({
  columns,
  fields,
  name,
  testID,
  nrows = ENTITY_RESOURCE_TABLE_NROWS,
  ...props
}: EntityResourceTablePropsModel<TType, TForm>): ReactElement<
  EntityResourceTablePropsModel<TType, TForm>
> => {
  const { styles } = useStyles({ props });
  useTranslation([RESOURCE]);

  const [endCursor, setEndCursor] = useState<string | undefined>();

  const { query: getConnection } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET_CONNECTION,
    TType,
    TForm
  >({
    fields,
    method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
    name,
  });

  const { data, isLoading } = useQuery<Array<TType>>({
    id: `${name}${RESOURCE_METHOD_TYPE.GET_CONNECTION}`,
    isInfinite: true,
    query: async () => {
      const { result } = await getConnection({
        filter: {},
        pagination: { after: endCursor, first: nrows },
      });
      setEndCursor(result?.pageInfo.endCursor || undefined);
      console.warn(result);
      return result?.edges.map(({ node }) => node) || [];
    },
  });

  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <Table<TType>
        columns={columns}
        data={data || []}
      />
    </Wrapper>
  );
};
