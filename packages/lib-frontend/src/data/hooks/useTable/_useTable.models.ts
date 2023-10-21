import {
  type TableColumnModel,
  type TableHeaderModel,
  type TableRowModel,
  type TableSelectTypeModel,
} from '#lib-frontend/data/hooks/useTable/useTable.models';
import { type PartialModel, type StringKeyModel } from '#lib-shared/core/core.models';

export type _UseTableParamsModel<TType> = {
  columns?: Array<TableColumnModel<PartialModel<TType>, Array<StringKeyModel<TType>>[number]>>;
  data?: Array<TType>;
  isFullWidth?: boolean;
  nilString?: string;
  onSelect?(rows?: Array<TType>): void;
  select?: TableSelectTypeModel;
};

export type _UseTableModel<TType> = {
  headers: Array<TableHeaderModel<TType>>;
  rows: Array<TableRowModel<TType>>;
};
