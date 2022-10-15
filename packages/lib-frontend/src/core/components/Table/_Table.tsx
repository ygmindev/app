import type { ThemeConfigModel } from '@lib/config/theme/theme.models';
import { AG_GRID_THEME } from '@lib/frontend/core/components/Table/_Table.constants';
import type { _TablePropsModel } from '@lib/frontend/core/components/Table/_Table.models';
import type { TableColumnModel } from '@lib/frontend/core/components/Table/Table.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
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
import type { ReactElement } from 'react';
import { useImperativeHandle, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const _GlobalStyle = createGlobalStyle`
  ${AgGridStyle}

  ${AgGridTheme}

  ${({ theme }: { theme: ThemeConfigModel }) => `
    .${AG_GRID_THEME} {
      --ag-background-color: transparent;
      --ag-foreground-color: ${theme.colors.text.main};
      --ag-header-background-color: transparent;
      --ag-header-foreground-color: ${theme.colors.text.main};
      --ag-checkbox-checked-color: ${theme.colors.primary.main};
      --ag-checkbox-indeterminate-color: ${theme.colors.secondary.main};
      --ag-checkbox-border-radius: ${theme.shape.borderRadius};

      .ag-cell, .ag-header-cell {
        font-size: ${theme.font.size.m}px;
      }
    }
  `}
`;

export const _Table = <TType,>({
  columns,
  data,
  forwardedRef,
  isFullWidth,
  onMount,
  onSelect,
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

  const _getColumnDef = <TValue,>(
    {
      flex,
      formatter,
      id,
      isHidden,
      isPinned,
      label,
      renderer,
      sort,
      width,
    }: TableColumnModel<TType, TValue>,
    i: number,
  ): ColDef => {
    const isSelection = select !== undefined && i === 0;
    const definition: ColDef = {
      checkboxSelection: isSelection,
      field: id as string,
      flex,
      headerCheckboxSelection: isSelection,
      headerCheckboxSelectionFilteredOnly: isSelection,
      headerName: t(label),
      hide: isHidden,
      maxWidth: width,
      minWidth: width,
      pinned: isPinned ? 'left' : undefined,
      sort,
      sortable: !isEmpty(sort),
      suppressSizeToFit: (width || 0) > 0,
      width,
    };

    if (renderer) {
      definition.cellRenderer = ({ node, value }: ICellRendererParams) => (
        <Wrapper isRowAlign>{renderer({ row: node && node.data, value })}</Wrapper>
      );
    }

    if (formatter) {
      definition.valueFormatter = ({ node, value }: ValueFormatterParams) =>
        formatter({ row: node && node.data, value });
    }

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
        rowMultiSelectWithClick={select !== undefined}
        rowSelection={select}
        suppressCellFocus
      />

      <_GlobalStyle />
    </div>
  );
};
