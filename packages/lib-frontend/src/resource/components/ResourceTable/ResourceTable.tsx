import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { TEST_TEXT_SHORT } from '@lib/frontend/core/core.constants';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { ConnectionBoundary } from '@lib/frontend/data/components/ConnectionBoundary/ConnectionBoundary';
import { Table } from '@lib/frontend/data/components/Table/Table';
import { TABLE_SELECT_TYPE } from '@lib/frontend/data/hooks/useTable/useTable.constants';
import { type TableColumnModel } from '@lib/frontend/data/hooks/useTable/useTable.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { ResourceFilter } from '@lib/frontend/resource/components/ResourceFilter/ResourceFilter';
import { type ResourceTablePropsModel } from '@lib/frontend/resource/components/ResourceTable/ResourceTable.models';
import { ResourceForm } from '@lib/frontend/resource/containers/ResourceForm/ResourceForm';
import { type ResourceFieldsModel } from '@lib/frontend/resource/resource.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type PartialModel, type StringKeyModel } from '@lib/shared/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';
import range from 'lodash/range';
import { type ReactElement, useCallback, useState } from 'react';

export const ResourceTable = <
  TType extends EntityResourceModel,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
>({
  fields,
  implementation,
  name,
  rootName,
  ...props
}: LFCPropsModel<ResourceTablePropsModel<TType, TForm, TRoot>>): ReactElement<
  LFCPropsModel<ResourceTablePropsModel<TType, TForm, TRoot>>
> => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const { create, getConnection, remove, update } = implementation;
  const [params, paramsSet] = useState<InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType>>();
  const fieldsF: ResourceFieldsModel<TType> = [
    { id: '_id' as StringKeyModel<TType>, isHidden: true },
    ...(fields ?? []),
  ];

  const handleUpsert = async (
    { _id, ...data }: PartialModel<TType>,
    root?: TRoot extends undefined ? never : string,
    id?: string,
  ): Promise<void> => {
    id
      ? await update({
          filter: [{ field: '_id', value: id }],
          root,
          update: data as UpdateModel<TType>,
        })
      : await create({ form: data as TForm, root });
  };

  const getColumns = useCallback(
    (reset?: () => Promise<void>) =>
      [
        {
          id: 'update',
          isFrozen: true,
          label: '',
          renderer: ({ row }) => (
            <ModalButton
              element={({ onClose }) => (
                <ResourceForm<TType, TForm, TRoot>
                  data={row}
                  fields={fieldsF}
                  name={name}
                  onCancel={onClose}
                  onSubmit={async (values, root) => {
                    await handleUpsert(values, root, row._id);
                    reset && void reset();
                    onClose();
                  }}
                  rootName={rootName}
                />
              )}
              icon="edit"
              size={THEME_SIZE.SMALL}
              type={BUTTON_TYPE.INVISIBLE}
            />
          ),
          width: theme.shape.size[THEME_SIZE.SMALL],
        },
        ...(fieldsF?.map(({ id, isHidden, label, renderer, width }) => ({
          id,
          isHidden,
          label,
          renderer,
          width,
        })) ?? []),
      ] as Array<TableColumnModel<PartialModel<TType>>>,
    [fieldsF],
  );

  return (
    <ConnectionBoundary
      {...wrapperProps}
      fallbackData={{
        result: {
          edges: range(5).map((i) => ({
            cursor: `${i}`,
            node: getColumns().reduce(
              (result, column) => ({
                ...result,
                [column.id]: column.renderer ? undefined : TEST_TEXT_SHORT,
              }),
              {} as PartialModel<TType>,
            ),
          })),
          pageInfo: {
            endCursor: '',
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: '',
          },
        },
      }}
      flex
      id={name}
      p
      params={params}
      query={getConnection}
      s>
      {({ data, elementState, reset }) => (
        <Wrapper
          flex
          s>
          <Wrapper
            isAlign
            isRow>
            <ModalButton
              element={({ onClose }) => (
                <ResourceForm<TType, TForm, TRoot>
                  fields={fieldsF}
                  name={name}
                  onCancel={onClose}
                  onSubmit={async (input, root) => {
                    await handleUpsert(input, root);
                    await reset();
                    onClose();
                  }}
                  rootName={rootName}
                />
              )}
              icon="add"
              size={THEME_SIZE.SMALL}>
              {t('core:new', { value: name })}
            </ModalButton>

            <ModalButton
              {...wrapperProps}
              element={({ onClose }) => (
                <ResourceFilter
                  fields={fieldsF}
                  name={name}
                  onCancel={onClose}
                  onSubmit={async (filter) => {
                    onClose();
                    paramsSet({ filter });
                  }}
                  rootName={rootName}
                />
              )}
              icon="filter"
              size={THEME_SIZE.SMALL}
              title={t('core:filter')}>
              {t('core:filter_plural')}
            </ModalButton>
          </Wrapper>

          <Table<PartialModel<TType>>
            columns={getColumns(reset)}
            data={data?.result?.edges.map((edge) => edge.node)}
            elementState={elementState}
            isRemovable
            onChange={() => {
              void reset();
            }}
            onRemove={async ({ _id }) => {
              void remove({ filter: [{ field: '_id', value: _id }] });
            }}
            select={TABLE_SELECT_TYPE.MULTIPLE}
          />
        </Wrapper>
      )}
    </ConnectionBoundary>
  );
};
