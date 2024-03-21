import {
  type _UseTableModel,
  type _UseTableParamsModel,
} from '@lib/frontend/data/hooks/useTable/_useTable.models';
import { type TableHeaderModel } from '@lib/frontend/data/hooks/useTable/useTable.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

export const _useTable = <TType,>({
  columns,
  data,
}: _UseTableParamsModel<TType>): _UseTableModel<TType> => {
  const { t } = useTranslation();
  const table = useReactTable({
    columns:
      columns?.map(({ id, label, width }) => ({
        accessorKey: id,
        header: label === undefined ? id : t(label),
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
            id: header.id as StringKeyModel<TType>,
            label: header.column.columnDef.header as string,
            width: header.getSize() ?? undefined,
            ...(column ? { align: column.align, isHidden: column.isHidden } : {}),
          };
        }),
      ],
      [] as Array<TableHeaderModel<TType>>,
    ),
    rows:
      table.getRowModel().rows.map((row) => ({
        cells: row.getVisibleCells().map((cell, i) => {
          const column = columns && columns[i];
          const value = cell.getValue();
          return {
            id: cell.id as StringKeyModel<TType>,
            value: (column && column.formatter
              ? column.formatter({
                  index: i,
                  row: row.original,
                  value: value as TType[StringKeyModel<TType>],
                })
              : value) as TType[StringKeyModel<TType>],
            width: cell.column.getSize() ?? undefined,
            ...(column
              ? {
                  align: column.align,
                  columnId: column.id,
                  field: column.field,
                  isHidden: column.isHidden,
                  label: column.label,
                  renderer: column.renderer,
                }
              : {}),
          };
        }),
        id: row.id,
        value: row.original,
      })) ?? [],
  };
};
