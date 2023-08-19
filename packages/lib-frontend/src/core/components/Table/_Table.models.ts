import {
  type TableColumnModel,
  type TableSelectTypeModel,
} from '#lib-frontend/core/components/Table/Table.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';

export type _TablePropsModel<TType extends Record<string, unknown>> = {
  columns?: Array<TableColumnModel<TType, Array<StringKeyModel<TType>>[number]>>;
  data: Array<TType>;
  isFullWidth?: boolean;
  onSelect?(rows?: Array<TType>): void;
  select?: TableSelectTypeModel;
};
