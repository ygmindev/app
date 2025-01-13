import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE, TEST_TEXT_SHORT } from '@lib/frontend/core/core.constants';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { ConnectionBoundary } from '@lib/frontend/data/components/ConnectionBoundary/ConnectionBoundary';
import { type ConnectionBoundaryRefModel } from '@lib/frontend/data/components/ConnectionBoundary/ConnectionBoundary.models';
import { Table } from '@lib/frontend/data/components/Table/Table';
import { type TableRefModel } from '@lib/frontend/data/components/Table/Table.models';
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
import { uid } from '@lib/shared/core/utils/uid/uid';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import { type UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';
import cloneDeep from 'lodash/cloneDeep';
import range from 'lodash/range';
import { type ReactElement, useCallback, useRef, useState } from 'react';

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
  const [filters, filtersSet] =
    useState<Record<StringKeyModel<TType>, Array<FilterModel<TType>>>>();

  const fieldsF: ResourceFieldsModel<TType> = [
    { id: '_id' as StringKeyModel<TType>, isHidden: true },
    ...(fields ?? []),
  ];
  const tableRef = useRef<TableRefModel<TType>>(null);
  const connectionBoundaryRef = useRef<ConnectionBoundaryRefModel<TType, TRoot>>(null);
  const [selectedRows, selectedRowsSet] = useState<Array<PartialModel<TType>>>([]);

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
          isFilterDisabled: true,
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
        ...(fieldsF?.map(({ formatter, id, isHidden, label, renderer, width }) => ({
          formatter,
          id,
          isHidden,
          label,
          renderer,
          width,
        })) ?? []),
      ] as Array<TableColumnModel<PartialModel<TType>>>,
    [fieldsF],
  );

  const handleFilter = async (
    k: StringKeyModel<TType>,
    v?: Record<StringKeyModel<TType>, Array<FilterModel<TType>>>,
  ): Promise<void> => {
    let filtersNew = cloneDeep(filters);
    if (v) {
      filtersNew = { ...filtersNew, ...v };
    } else {
      delete filtersNew?.[k];
    }
    filtersSet(filtersNew);
  };

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
                [column.id]:
                  column.id === '_id' ? uid() : column.renderer ? undefined : TEST_TEXT_SHORT,
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
      params={filters ? { filter: Object.values(filters).flat() } : undefined}
      query={getConnection}
      ref={connectionBoundaryRef}
      s>
      {({ data, elementState, reset }) => {
        const columns = getColumns(reset);
        return (
          <Wrapper
            flex
            s>
            <Wrapper
              isAlign
              isRow>
              <Button
                icon="refresh"
                onPress={async () => connectionBoundaryRef.current?.reset?.()}
                size={THEME_SIZE.SMALL}>
                {t('core:refresh')}
              </Button>

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

              {selectedRows.length > 0 && (
                <Menu
                  anchor={(isActive) => (
                    <Button
                      elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
                      icon="dotsVertical"
                      size={THEME_SIZE.SMALL}
                      type={BUTTON_TYPE.TRANSPARENT}>
                      {t('resource:rowsSelected', { count: selectedRows.length })}
                    </Button>
                  )}
                  options={[
                    {
                      id: 'unselect',
                      label: t('core:all', { value: t('resource:unselect') }),
                      onPress: () => tableRef.current?.select?.([]),
                    },
                  ]}
                />
              )}
            </Wrapper>

            <Wrapper
              isAlign
              isFullWidth
              isRow>
              <Wrapper
                isAlign
                isRow>
                <Button
                  elementState={filters ? undefined : ELEMENT_STATE.DISABLED}
                  onPress={() => filtersSet(undefined)}
                  size={THEME_SIZE.SMALL}
                  tooltip={filters ? undefined : t('resource:noFilterApplied')}
                  type={BUTTON_TYPE.INVISIBLE}>
                  {t('resource:clearAllFilters')}
                </Button>
              </Wrapper>

              <Wrapper
                flex
                isAlign
                isHorizontalScrollable
                isRow>
                {fieldsF.map(
                  (field) =>
                    !field.isFilterDisabled &&
                    (!field.fields || field.field) && (
                      <ResourceFilter
                        field={field}
                        key={field.id}
                        onSubmit={async (v) => handleFilter(field.id, v)}
                        values={filters?.[field.id]}
                      />
                    ),
                )}
              </Wrapper>
            </Wrapper>

            <Table<PartialModel<TType>>
              columns={columns}
              data={data?.result?.edges.map((edge) => edge.node)}
              elementState={elementState}
              idField={'_id' as StringKeyModel<TType>}
              isRemovable
              onChange={() => {
                void reset();
              }}
              onRemove={async ({ _id }) => {
                void remove({ filter: [{ field: '_id', value: _id }] });
              }}
              onSelect={(v) => selectedRowsSet(v ?? [])}
              ref={tableRef}
              select={TABLE_SELECT_TYPE.MULTIPLE}
            />
          </Wrapper>
        );
      }}
    </ConnectionBoundary>
  );
};
