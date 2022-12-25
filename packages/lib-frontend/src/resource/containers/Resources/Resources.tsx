import { Button } from '@lib/frontend/core/components/Button/Button';
import { Content } from '@lib/frontend/core/components/Content/Content';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
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
import { ResourceForm } from '@lib/frontend/resource/containers/ResourceForm/ResourceForm';
import type { ResourcesPropsModel } from '@lib/frontend/resource/containers/Resources/Resources.models';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import type { UseResourceMethodFieldsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { RESOURCE, RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import { reduce } from 'lodash';
import type { ReactElement } from 'react';
import { useEffect, useRef, useState } from 'react';

export const Resources = <TType extends EntityResourceModel, TForm, TRoot = undefined>({
  FormComponent,
  columns,
  fields,
  limit,
  name,
  root,
  testID,
  validators,
  ...props
}: ResourcesPropsModel<TType, TForm, TRoot>): ReactElement<
  ResourcesPropsModel<TType, TForm, TRoot>
> => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation([RESOURCE]);

  const ref = useRef<TableRefModel>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>();
  const [selectRow, setSelectedRow] = useState<TType | undefined>();
  const [selectedRows, setSelectedRows] = useState<Array<TType> | undefined>();

  const { query: create } = useResourceMethod<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>({
    fields: fields as UseResourceMethodFieldsModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name,
  });

  const { query: getConnection } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET_CONNECTION,
    TType,
    TForm,
    TRoot
  >({
    fields: fields as UseResourceMethodFieldsModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      TType,
      TRoot
    >,
    method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
    name,
  });

  const { data, queryNext } = useQueryConnection<TType>({
    id: `${name}${RESOURCE_METHOD_TYPE.GET_CONNECTION}`,
    limit,
    query: async (params) => {
      const { result } = await getConnection({
        filter: {},
        pagination: { ...params, first: limit },
        root,
      });
      return result || null;
    },
  });

  const { query: remove } = useResourceMethod<
    RESOURCE_METHOD_TYPE.REMOVE,
    EntityResourceModel,
    TForm,
    TRoot
  >({ fields: [{ result: ['_id'] }], method: RESOURCE_METHOD_TYPE.REMOVE, name });

  const _handleRemove = async (id: string): Promise<void> => {
    await remove({ filter: { _id: id }, root });
  };

  const _handleClose = (): void => {
    setSelectedRow(undefined);
    setIsCreateModalOpen(false);
  };

  useEffect(() => {
    queryNext();
  }, []);

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
          onSelect={setSelectedRows}
          select={TABLE_SELECT_TYPE.MULTIPLE}
        />

        <Modal
          isOpen={isCreateModalOpen || selectRow !== undefined}
          onClose={_handleClose}>
          {FormComponent ? (
            <FormComponent onCancel={_handleClose} />
          ) : (
            <ResourceForm<TType, TForm, TRoot>
              columns={columns}
              data={selectRow}
              onCancel={_handleClose}
              onCreate={create}
              root={root}
              validators={validators}
            />
          )}
        </Modal>
      </Content>
    </Wrapper>
  );
};
