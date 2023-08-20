import { type ReactNode } from 'react';

import {
  type _UseTableModel,
  type _UseTableParamsModel,
} from '#lib-frontend/data/hooks/useTable/_useTable.models';
import {
  type TABLE_SELECT_TYPE,
  type TABLE_SORT_TYPE,
} from '#lib-frontend/data/hooks/useTable/useTable.constants';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type UseTableParamsModel<TType> = _UseTableParamsModel<TType>;

export type UseTableModel<TType> = _UseTableModel<TType>;

export type TableSelectTypeModel = `${TABLE_SELECT_TYPE}`;

export type TableSortTypeModel = `${TABLE_SORT_TYPE}`;

export type TableColumnModel<TType, TKey extends StringKeyModel<TType>> = WithIdModel<TKey> & {
  formatter?: TableColumnFormatterModel<TType, TKey>;
  label?: TranslatableTextModel;
  renderer?: TableColumnRendererModel<TType, TKey>;
  sort?: TableSortTypeModel | boolean;
  width?: number;
};

export type TableColumnRendererModel<TType, TKey extends StringKeyModel<TType>> = (params: {
  row: TType;
  value: TType[TKey];
}) => ReactNode;

export type TableColumnFormatterModel<TType, TKey extends StringKeyModel<TType>> = (params: {
  row: TType;
  value: TType[TKey];
}) => string;

export type TableHeaderModel<TType> = WithIdModel<StringKeyModel<TType>> & {
  label: string;
  width?: number;
};

export type TableRowModel<TType> = WithIdModel & {
  cells: Array<TableCellModel<TType>>;
};

export type TableCellModel<TType> = WithIdModel<StringKeyModel<TType>> & {
  value?: string;
  width?: number;
};
