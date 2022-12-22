import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import { AG_GRID_THEME } from '@lib/frontend/core/components/Table/_Table.constants';
import type { _TablePropsModel } from '@lib/frontend/core/components/Table/_Table.models';
import {
  COLUMN_SORT_TYPE,
  TABLE_SELECT_TYPE,
} from '@lib/frontend/core/components/Table/Table.constants';
import type { TableColumnModel } from '@lib/frontend/core/components/Table/Table.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import type {
  ColDef,
  ColumnApi,
  GridApi,
  ICellRendererParams,
  ValueFormatterParams,
} from 'ag-grid-community';
import AgGridStyle from 'ag-grid-community/dist/styles/ag-grid.css';
import AgGridTheme from 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import { findIndex } from 'lodash';
import type { ReactElement } from 'react';
import { useImperativeHandle, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const _GlobalStyle = createGlobalStyle`
  ${AgGridStyle}

  ${AgGridTheme}

  ${({ theme }: { theme: ThemeConfigParamsModel }) => `
    .${AG_GRID_THEME} {
      --ag-background-color: transparent;
      --ag-checkbox-border-radius: ${theme.shape.borderRadius};
      --ag-checkbox-checked-color: ${theme.colors.primary.main};
      --ag-checkbox-indeterminate-color: ${theme.colors.secondary.main};
      --ag-foreground-color: ${theme.colors.text.main};
      --ag-header-background-color: transparent;
      --ag-header-foreground-color: ${theme.colors.text.main};
      --ag-selected-row-background-color: transparent;

      .ag-cell, .ag-header-cell {
        font-size: ${theme.font.size.m}px;
        padding: 0 ${theme.shape.spacing.m}px;
        display: flex;
        align-items: center;
      }

      .ag-pinned-right-header, .ag-cell-first-right-pinned {
        border-left: none !important;
      }
    }
  `}
`;

export const _Table = <TType,>({
  columns,
  data,
  forwardedRef,
  isDisabled,
  isFullWidth,
  onMount,
  onSelect,
  rowHeight,
  select,
}: _TablePropsModel<TType>): ReactElement<_TablePropsModel<TType>> => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [gridApi, setGridApi] = useState<GridApi>();
  const [columnApi, setColumnApi] = useState<ColumnApi>();
  const { duration } = theme.animation;

  useImperativeHandle(forwardedRef, () => ({
    deselectRows: () => gridApi && gridApi.deselectAll(),
  }));

  const _handleSelect = (): void => {
    const selectedRows = gridApi ? gridApi.getSelectedRows() : [];
    onSelect && onSelect(selectedRows);
  };

  const _unhiddenColumnIndex = findIndex(columns, ({ isHidden }) => !isHidden);
  const _getColumnDef = <TValue,>(
    {
      flex,
      formatter,
      id,
      isHidden,
      label,
      pin,
      renderer,
      sort,
      width,
    }: TableColumnModel<TType, TValue>,
    i: number,
  ): ColDef => {
    const definition: ColDef = {
      checkboxSelection: select !== undefined && i === _unhiddenColumnIndex,
      field: id as string,
      flex,
      headerCheckboxSelection: select === TABLE_SELECT_TYPE.MULTIPLE && i === _unhiddenColumnIndex,
      headerName: t(label),
      hide: isHidden,
      maxWidth: width,
      minWidth: width,
      pinned: pin,
      showDisabledCheckboxes: true,
      sort: [COLUMN_SORT_TYPE.ASCENDING, COLUMN_SORT_TYPE.DESCENDING].includes(
        sort as COLUMN_SORT_TYPE,
      )
        ? (sort as COLUMN_SORT_TYPE)
        : undefined,
      sortable: !isDisabled && (sort === true || !isEmpty(sort)),
      suppressSizeToFit: (width || 0) > 0,
      width,
    };

    if (renderer) {
      definition.cellRenderer = ({ node, value }: ICellRendererParams) =>
        renderer({ row: node && node.data, value });
    }

    definition.valueFormatter = ({ node, value }: ValueFormatterParams) =>
      formatter ? formatter({ row: node && node.data, value }) : isEmpty(value) ? '-' : value;

    return definition;
  };
  return (
    <div
      className={AG_GRID_THEME}
      style={{ flex: 1 }}>
      <AgGridReact
        animateRows
        columnDefs={columns.map(_getColumnDef)}
        debounceVerticalScrollbar
        isRowSelectable={() => !isDisabled}
        loadingOverlayComponent={Text}
        onGridReady={async ({ api, columnApi }) => {
          await sleep({ duration });
          isFullWidth ? api.sizeColumnsToFit() : columnApi.autoSizeAllColumns();
          setGridApi(api);
          setColumnApi(columnApi);
          onMount && onMount();
        }}
        onRowDataUpdated={async () => {
          if (gridApi && columnApi) {
            await sleep({ duration });
            isFullWidth ? gridApi.sizeColumnsToFit() : columnApi.autoSizeAllColumns();
          }
        }}
        onSelectionChanged={_handleSelect}
        overlayNoRowsTemplate={t('core:messages.nothingToShow')}
        rowData={data}
        rowHeight={rowHeight}
        rowSelection={select}
        suppressCellFocus
        suppressRowClickSelection
        suppressRowHoverHighlight
      />

      <_GlobalStyle />
    </div>
  );
};
