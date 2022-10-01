import type { _TablePropsModel } from '@lib/frontend/core/components/Table/_Table.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { ReactNode } from 'react';

export interface TableColumnModel<TRow, TCol = unknown> {
  field: string;
  flex?: number;
  isHidden?: boolean;
  isPinned?: boolean;
  name?: TranslationTextModel;
  renderer?: TableColumnRendererModel<TRow, TCol>;
  sort?: 'asc' | 'desc';
  width?: number;
}

export type TableColumnRendererModel<TRow, TCol> = (params: {
  column: TableColumnModel<TRow, TCol>;
  row: TRow;
  value: TCol;
}) => ReactNode;

export interface TablePropsModel<TRow> extends _TablePropsModel<TRow>, WithTestIdModel {}
