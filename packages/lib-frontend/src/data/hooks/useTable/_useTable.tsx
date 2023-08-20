import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

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
}: _UseTableParamsModel<TType>): _UseTableModel<TType> => {
  const { t } = useTranslation();
  const table = useReactTable<TType>({
    columns:
      columns?.map(({ id, label, width }) => ({
        accessorKey: id,
        header: label ? t(label) : id,
        size: width,
      })) ?? [],
    data: data ?? [],
    getCoreRowModel: getCoreRowModel(),
  });
  return {
    headers: table.getHeaderGroups().reduce(
      (result, group) => [
        ...result,
        ...group.headers.map((header) => ({
          id: header.id as StringKeyModel<TType>,
          label: header.column.columnDef.header as string,
          width: header.getSize() ?? undefined,
        })),
      ],
      [] as Array<TableHeaderModel<TType>>,
    ),
    rows:
      table.getRowModel().rows.map((row) => ({
        cells: row.getVisibleCells().map((cell) => ({
          id: cell.id as StringKeyModel<TType>,
          value: cell.getValue() as string,
          width: cell.column.getSize() ?? undefined,
        })),
        id: row.id,
      })) ?? [],
  };
};
