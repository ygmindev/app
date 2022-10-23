import type {
  TableColumnModel,
  TableRefModel,
  TableSelectTypeModel,
} from '@lib/frontend/core/components/Table/Table.models';
import type { WithForwardedRefPropsModel } from '@lib/frontend/core/decorators/withForwardRefProps/withForwardRefProps.models';

export interface _TablePropsModel<TType> extends WithForwardedRefPropsModel<TableRefModel> {
  columns: Array<TableColumnModel<TType, unknown>>;
  data?: Array<TType>;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  onMount?(): void;
  onSelect?(rows?: Array<TType>): void;
  rowHeight?: number;
  select?: TableSelectTypeModel;
}
