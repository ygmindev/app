import type {
  TableColumnModel,
  TableRefModel,
  TableSelectTypeModel,
} from '@lib/frontend/core/components/Table/Table.models';
import type { WithForwardedRefPropsModel } from '@lib/frontend/core/decorators/withForwardRefProps/withForwardRefProps.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _TablePropsModel<TType> extends WithForwardedRefPropsModel<TableRefModel> {
  columns: Array<TableColumnModel<TType, unknown>>;
  data?: Array<TType>;
  isFullWidth?: boolean;
  onMount?: CallableModel;
  onSelect?(rows?: Array<TType>): void;
  rowHeight?: number;
  select?: TableSelectTypeModel;
}
