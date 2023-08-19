import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { type ReactElement } from 'react';

import { type _TablePropsModel } from '#lib-frontend/core/components/Table/_Table.models';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';

export const _Table = <TType extends Record<string, unknown>>({
  columns,
  data,
  isFullWidth,
  onSelect,
  select,
}: SFCPropsModel<_TablePropsModel<TType>>): ReactElement<
  SFCPropsModel<_TablePropsModel<TType>>
> => {
  const { t } = useTranslation();
  const table = useReactTable<TType>({
    columns:
      columns?.map(({ id, label }) => ({ accessorKey: id, header: label ? t(label) : id, id })) ||
      [],
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Wrapper grow>
      {table.getHeaderGroups().map(({ headers, id }) => (
        <Wrapper
          isRow
          key={id}>
          {headers.map((header) => (
            <Wrapper key={header.id}>
              <TranslatableText>{header.column.columnDef.header as string}</TranslatableText>
            </Wrapper>
          ))}
        </Wrapper>
      ))}

      {table.getRowModel().rows.map((row) => (
        <Wrapper
          isRow
          key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <Wrapper key={cell.id}>
              <Text>{cell.getValue() as string}</Text>

              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </Wrapper>
          ))}
        </Wrapper>
      ))}
    </Wrapper>
  );
};
