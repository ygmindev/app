import type {
  TableColumnModel,
  TableSelectTypeModel,
} from '@lib/frontend/core/components/Table/Table.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _TablePropsModel<TType> {
  columns: Array<TableColumnModel<TType, unknown>>;
  data?: Array<TType>;
  isFullWidth?: boolean;
  onMount?: CallableModel;
  onSelect?(rows?: Array<TType>): void;
  select?: TableSelectTypeModel;
}
