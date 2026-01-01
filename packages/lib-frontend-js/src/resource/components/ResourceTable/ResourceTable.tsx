import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import { SCROLL_TYPE } from '@lib/frontend/core/components/ScrollView/ScrollView.constants';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE, TEST_TEXT_SHORT } from '@lib/frontend/core/core.constants';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { type DataBoundaryRefModel } from '@lib/frontend/data/components/DataBoundary/DataBoundary.models';
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
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type FilterModel } from '@lib/model/resource/Filter/Filter.models';
import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type PartialModel, type StringKeyModel } from '@lib/shared/core/core.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import cloneDeep from 'lodash/cloneDeep';
import range from 'lodash/range';
import { type ReactElement, useCallback, useRef, useState } from 'react';

export const ResourceTable = <TType extends ResourceModel, TRoot = undefined>({
  fields,
  implementation,
  name,
  rootName,
  ...props
}: LFCPropsModel<ResourceTablePropsModel<TType, TRoot>>): ReactElement<
  LFCPropsModel<ResourceTablePropsModel<TType, TRoot>>
> => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const { create, getMany, remove, update } = implementation;
  const [filters, filtersSet] =
    useState<Record<StringKeyModel<TType>, Array<FilterModel<TType>>>>();
  const dataBoundaryRef =
    useRef<DataBoundaryRefModel<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>>>(
      null,
    );

  const fieldsF: ResourceFieldsModel<TType> = [
    { id: '_id' as StringKeyModel<TType>, isHidden: true },
    ...(fields ?? []),
  ];
  const tableRef = useRef<TableRefModel<TType>>(null);
  const [selectedRows, selectedRowsSet] = useState<Array<PartialModel<TType>>>([]);

  const handleUpsert = async (
    { _id, ...data }: Partial<TType>,
    root?: TRoot extends undefined ? never : string,
    id?: string,
  ): Promise<void> => {
    id
      ? await update({
          id,
          root,
          update: data as Partial<TType>,
        })
      : await create({ form: data as Partial<TType>, root });
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
                <ResourceForm<TType, TRoot>
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
    <DataBoundary
      {...wrapperProps}
      fallbackData={{
        result: {
          items: range(5).map((i) =>
            getColumns().reduce(
              (result, column) => ({
                ...result,
                [column.id]:
                  column.id === '_id' ? uid() : column.renderer ? undefined : TEST_TEXT_SHORT,
              }),
              {} as PartialModel<TType>,
            ),
          ),
        },
      }}
      flex
      id={name}
      params={filters ? { filter: Object.values(filters).flat() } : undefined}
      query={getMany}
      ref={dataBoundaryRef}>
      {({ data, elementState, reset }) => {
        const columns = getColumns(reset);
        return (
          <Wrapper
            flex
            s={THEME_SIZE.SMALL}>
            <Wrapper
              isAlign
              isRow
              justify={FLEX_JUSTIFY.SPACE_BETWEEN}>
              <Text fontStyle={FONT_STYLE.HEADLINE}>{name}</Text>

              <Wrapper
                isAlign
                isRow>
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

                <Button
                  icon="refresh"
                  onPress={async () => dataBoundaryRef.current?.reset?.()}
                  size={THEME_SIZE.SMALL}
                  type={BUTTON_TYPE.TRANSPARENT}>
                  {t('core:refresh')}
                </Button>

                <ModalButton
                  element={({ onClose }) => (
                    <ResourceForm<TType, TRoot>
                      fields={fieldsF}
                      name={name}
                      onCancel={onClose}
                      onSubmit={async (input, root) => {
                        await handleUpsert(input, root);
                        await reset?.();
                        onClose();
                      }}
                      rootName={rootName}
                    />
                  )}
                  icon="add"
                  size={THEME_SIZE.SMALL}>
                  {t('core:new', { value: name })}
                </ModalButton>
              </Wrapper>
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
                  type={BUTTON_TYPE.INVISIBLE}>
                  {filters ? t('resource:clearAllFilters') : t('resource:noFilterApplied')}
                </Button>
              </Wrapper>

              <Wrapper
                flex
                isAlign
                isHorizontalScrollable
                isRow
                scrollType={SCROLL_TYPE.BUTTON}>
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
              data={data?.result?.items}
              elementState={elementState}
              idField={'_id' as StringKeyModel<TType>}
              isRemovable
              onChange={() => {
                void reset?.();
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
    </DataBoundary>
  );
};
