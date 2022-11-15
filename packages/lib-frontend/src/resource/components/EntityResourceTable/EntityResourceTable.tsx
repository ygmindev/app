import { Button } from '@lib/frontend/core/components/Button/Button';
import { Content } from '@lib/frontend/core/components/Content/Content';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { Table } from '@lib/frontend/core/components/Table/Table';
import {
  COLUMN_PIN_TYPE,
  TABLE_SELECT_TYPE,
} from '@lib/frontend/core/components/Table/Table.constants';
import type { TableRefModel } from '@lib/frontend/core/components/Table/Table.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { useQueryConnection } from '@lib/frontend/core/hooks/useQueryConnection/useQueryConnection';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { EntityResourceModal } from '@lib/frontend/resource/components/EntityResourceModal/EntityResourceModal';
import { ENTITY_RESOURCE_TABLE_LIMIT_DEFAULT } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.constants';
import type { EntityResourceTablePropsModel } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.models';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { THEME_COLOR } from '@lib/frontend/styling/utils/theme/theme.constants';
import { RESOURCE, RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import type { FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import { reduce } from 'lodash';
import type { ReactElement } from 'react';
import { useEffect, useRef, useState } from 'react';

export const EntityResourceTable = <TType extends EntityResourceModel, TForm>({
  columns,
  getConnectionFields,
  createFields,
  name,
  testID,
  validators,
  limit = ENTITY_RESOURCE_TABLE_LIMIT_DEFAULT,
  ...props
}: EntityResourceTablePropsModel<TType, TForm>): ReactElement<
  EntityResourceTablePropsModel<TType, TForm>
> => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation([RESOURCE]);

  const ref = useRef<TableRefModel>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>();
  const [selectRow, setSelectedRow] = useState<TType | undefined>();
  const [selectedRows, setSelectedRows] = useState<Array<TType> | undefined>();

  const { query: create } = useResourceMethod<RESOURCE_METHOD_TYPE.CREATE, TType, TForm>({
    fields: createFields,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name,
  });

  const { query: getConnection } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET_CONNECTION,
    TType,
    TForm
  >({ fields: getConnectionFields, method: RESOURCE_METHOD_TYPE.GET_CONNECTION, name });

  const {
    data,
    isLoading: _isGetConnectionLoading,
    queryNext,
  } = useQueryConnection<TType>({
    id: `${name}${RESOURCE_METHOD_TYPE.GET_CONNECTION}`,
    limit,
    query: async (params) => {
      const { result } = await getConnection({
        filter: {},
        pagination: { ...params, first: limit },
      });
      return result || null;
    },
  });

  const { isLoading: _isRemoveLoading, query: remove } = useResourceMethod<
    RESOURCE_METHOD_TYPE.REMOVE,
    EntityResourceModel,
    TForm
  >({ fields: [{ result: ['_id'] }], method: RESOURCE_METHOD_TYPE.REMOVE, name });

  const _handleRemove = async (id: string): Promise<void> => {
    await remove({ filter: { _id: id } as FilterModel<TType> });
  };

  useEffect(() => {
    queryNext();
  }, []);

  const _isLoading = _isGetConnectionLoading || _isRemoveLoading;

  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <Content
        grow
        rightElement={
          <Button
            icon={ICON.add}
            onPress={() => setIsCreateModalOpen(true)}>
            {t('resource:labels.create')}
          </Button>
        }
        title={name}>
        <Table<TType>
          columns={[
            ...columns.map((column) => ({ ...column, sort: true })),
            {
              id: 'actions',
              pin: COLUMN_PIN_TYPE.RIGHT,
              renderer: ({ row }) =>
                row._id && (
                  <Wrapper isCenter>
                    <Menu
                      anchor={(isActive) => (
                        <Icon
                          icon={ICON.ellipsis}
                          isPressed={isActive}
                          isTitle
                        />
                      )}
                      options={[
                        {
                          icon: ICON.edit,
                          id: 'update',
                          label: t('resource:labels.update'),
                          onPress: () => setSelectedRow(row),
                        },
                        {
                          color: THEME_COLOR.ERROR,
                          confirmMessage: t('core:messages.confirmRemove'),
                          icon: ICON.timesCircle,
                          id: 'remove',
                          label: t('resource:labels.remove'),
                          onPress: () => _handleRemove(row._id),
                        },
                      ]}
                    />
                  </Wrapper>
                ),
            },
          ]}
          data={reduce<ConnectionModel<TType> | null, Array<TType>>(
            data?.pages,
            (result, page) => [...result, ...(page?.edges.map(({ node }) => node) || [])],
            [],
          )}
          forwardedRef={ref}
          isLoading={_isLoading}
          onSelect={setSelectedRows}
          select={TABLE_SELECT_TYPE.MULTIPLE}
        />

        <EntityResourceModal<TType, TForm>
          columns={columns}
          data={selectRow}
          isOpen={isCreateModalOpen || selectRow !== undefined}
          onClose={() => {
            setSelectedRow(undefined);
            setIsCreateModalOpen(false);
          }}
          onCreate={create}
          validators={validators}
        />
      </Content>
    </Wrapper>
  );
};
