import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import isNil from 'lodash/isNil';
import toString from 'lodash/toString';

import {
  type _UseTableModel,
  type _UseTableParamsModel,
} from '#lib-frontend/data/hooks/useTable/_useTable.models';
import { type TableHeaderModel } from '#lib-frontend/data/hooks/useTable/useTable.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type StringKeyModel } from '#lib-shared/core/core.models';

export const _useTable = <TType,>({
  columns,
  data,
  nilString = '-',
}: _UseTableParamsModel<TType>): _UseTableModel<TType> => {
  const { t } = useTranslation();
  const table = useReactTable<TType>({
    columns:
      columns?.map(({ _id, label, width }) => ({
        accessorKey: _id,
        header: label ? t(label) : _id,
        minSize: 0,
        size: width ?? 0,
      })) ?? [],
    data: data ?? [],
    getCoreRowModel: getCoreRowModel(),
  });
  return {
    headers: table.getHeaderGroups().reduce(
      (result, group) => [
        ...result,
        ...group.headers.map((header, i) => {
          const column = columns && columns[i];
          return {
            _id: header.id as StringKeyModel<TType>,
            label: header.column.columnDef.header as string,
            width: header.getSize() ?? undefined,
            ...(column ? { align: column.align } : {}),
          };
        }),
      ],
      [] as Array<TableHeaderModel<TType>>,
    ),
    rows:
      table.getRowModel().rows.map((row) => ({
        _id: row.id,
        cells: row.getVisibleCells().map((cell, i) => {
          const column = columns && columns[i];
          const value = cell.getValue();
          return {
            _id: cell.id as StringKeyModel<TType>,
            value: isNil(value)
              ? nilString
              : column && column.formatter
              ? column.formatter({
                  row: row.original,
                  value: value as TType[StringKeyModel<TType>],
                })
              : toString(value),
            width: cell.column.getSize() ?? undefined,
            ...(column ? { align: column.align, renderer: column.renderer } : {}),
          };
        }),
        value: row.original,
      })) ?? [],
  };
};
