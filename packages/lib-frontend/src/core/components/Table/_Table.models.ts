import type {
  TableColumnModel,
  TableRefModel,
  TableSelectTypeModel,
} from '@lib/frontend/core/components/Table/Table.models';
import type { RefPropsModel } from '@lib/frontend/core/core.models';

export interface _TablePropsModel<TType> extends RefPropsModel<TableRefModel> {
  columns: Array<TableColumnModel<TType, unknown>>;
  data?: Array<TType>;
  isFullWidth?: boolean;
  isVirtualized?: boolean;
  onMount?(): void;
  onSelect?(rows?: Array<TType>): void;
  rowHeight?: number;
  select?: TableSelectTypeModel;
}
