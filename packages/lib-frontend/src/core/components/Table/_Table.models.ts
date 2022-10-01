import type { TableColumnModel } from '@lib/frontend/core/components/Table/Table.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _TablePropsModel<TRow> {
  columns: Array<TableColumnModel<TRow>>;
  data?: Array<TRow>;
  isFullWidth?: boolean;
  onMount?: CallableModel;
  onSelect?(rows: Array<TRow>): void;
  select?: 'multiple' | 'single';
}
