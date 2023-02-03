import 'ag-grid-community/styles/ag-grid.min.css';
import 'ag-grid-community/styles/ag-theme-material.min.css';

import { AG_GRID_THEME } from '@lib/config/style/sheet/configs/sheet.config.ag-grid';
import type { _TablePropsModel } from '@lib/frontend/core/components/Table/_Table.models';
import {
  COLUMN_SORT_TYPE,
  TABLE_SELECT_TYPE,
} from '@lib/frontend/core/components/Table/Table.constants';
import type {
  TableColumnModel,
  TableRefModel,
} from '@lib/frontend/core/components/Table/Table.models';
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
import { AgGridReact } from 'ag-grid-react';
import type { ForwardedRef } from 'react';
import { forwardRef, useImperativeHandle, useState } from 'react';

export const _Table = forwardRef(
  <TType,>(
    {
      columns,
      data,
      isFullWidth,
      isVirtualized = true,
      onMount,
      onSelect,
      rowHeight,
      select,
    }: _TablePropsModel<TType>,
    ref: ForwardedRef<TableRefModel>,
  ) => {
    const { t } = useTranslation();
    const theme = useTheme();
    const [gridApi, setGridApi] = useState<GridApi>();
    const [columnApi, setColumnApi] = useState<ColumnApi>();
    const { duration } = theme.animation;

    useImperativeHandle(ref, () => ({
      deselectRows: () => gridApi && gridApi.deselectAll(),
    }));

    const _handleSelect = (): void => {
      const selectedRows = gridApi ? gridApi.getSelectedRows() : [];
      onSelect && onSelect(selectedRows);
    };

    const _unhiddenColumnIndex = columns.findIndex(({ isHidden }) => !isHidden);
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
        headerCheckboxSelection:
          select === TABLE_SELECT_TYPE.MULTIPLE && i === _unhiddenColumnIndex,
        headerName: label ? t(label) : undefined,
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
        sortable: sort === true || !isEmpty(sort),
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
          suppressRowVirtualisation={!isVirtualized}
        />
      </div>
    );
  },
);
