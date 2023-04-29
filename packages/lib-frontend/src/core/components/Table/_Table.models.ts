import type {
  TableColumnModel,
  TableSelectTypeModel,
} from '@lib/frontend/core/components/Table/Table.models';

export interface _TablePropsModel<TType> {
  columns: Array<TableColumnModel<TType, unknown>>;
  data?: Array<TType>;
  isFullWidth?: boolean;
  isVirtualized?: boolean;
  onMount?(): void;
  onSelect?(rows?: Array<TType>): void;
  rowHeight?: number;
  select?: TableSelectTypeModel;
}
