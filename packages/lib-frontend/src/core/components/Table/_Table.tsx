import type { ThemeConfigModel } from '@lib/config/theme/theme.models';
import type { _TablePropsModel } from '@lib/frontend/core/components/Table/_Table.models';
import type { TableColumnModel } from '@lib/frontend/core/components/Table/Table.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import type { ColDef, ColumnApi, GridApi, ICellRendererParams } from 'ag-grid-community';
import AgGridStyle from 'ag-grid-community/dist/styles/ag-grid.css';
import AgGridTheme from 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import type { ReactElement } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const _Component = styled.div`
  flex: 1;

  ${AgGridStyle}

  ${AgGridTheme}

  .ag-theme-material {
    ${({ theme }: { theme: ThemeConfigModel }) => `
      --ag-background-color: transparent !important;
      --ag-row-border-color: transparent !important;
      --ag-font-size: ${theme.font.size.m};
      --ag-foreground-color: ${theme.colors.text.main};
      --ag-header-background-color: transparent !important;
      --ag-header-foreground-color: ${theme.colors.text.main};
      --ag-checkbox-checked-color: ${theme.colors.primary.main};
      --ag-checkbbox-indeterminate-color: ${theme.colors.secondary.main};
      --ag-checkbox-border-radius: ${theme.shape.borderRadius};
    `}

    .ag-react-container, .ag-cell {
      height: 100%;
      display: flex;
    }

    .ag-header-cell {
      background-color: transparent !important;
    }
  }
`;

export const _Table = <TType,>({
  columns,
  data,
  isFullWidth,
  onMount,
  onSelect,
  select,
}: _TablePropsModel<TType>): ReactElement<_TablePropsModel<TType>> => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [gridApi, setGridApi] = useState<GridApi>();
  const [columnApi, setColumnApi] = useState<ColumnApi>();
  const duration = theme.animation.duration;

  const _handleSelect = (): void => {
    const selectedRows = gridApi ? gridApi.getSelectedRows() : [];
    onSelect && onSelect(selectedRows);
  };

  const _getColumnDef = <TValue,>(
    {
      field,
      flex,
      isHidden,
      isPinned,
      name,
      renderer,
      sort,
      width,
    }: TableColumnModel<TType, TValue>,
    i: number,
  ): ColDef => {
    const isSelection = select !== undefined && i === 0;
    const definition: ColDef = {
      checkboxSelection: isSelection,
      field,
      flex,
      headerCheckboxSelection: isSelection,
      headerCheckboxSelectionFilteredOnly: isSelection,
      headerName: t(name),
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

    return definition;
  };
  return (
    <_Component className="ag-theme-material">
      <AgGridReact
        animateRows
        columnDefs={columns.map(_getColumnDef)}
        debounceVerticalScrollbar
        onGridReady={async ({ api, columnApi }) => {
          await sleep({ duration });
          isFullWidth ? api.sizeColumnsToFit() : columnApi.autoSizeAllColumns();
          setGridApi(api);
          setColumnApi(columnApi);
          onMount && onMount();
        }}
        onRowDataChanged={async () => {
          if (gridApi && columnApi) {
            await sleep({ duration });
            isFullWidth ? gridApi.sizeColumnsToFit() : columnApi.autoSizeAllColumns();
          }
        }}
        onSelectionChanged={_handleSelect}
        overlayNoRowsTemplate={`<span>${t('core:messages.nothingToShow')}</span>`}
        rowData={data}
        rowMultiSelectWithClick={select !== undefined}
        rowSelection={select}
        suppressCellFocus
        suppressRowHoverHighlight
      />
    </_Component>
  );
};
