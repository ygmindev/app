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
import { type FontAlignModel } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type UseTableParamsModel<TType> = _UseTableParamsModel<TType>;

export type UseTableModel<TType> = _UseTableModel<TType>;

export type TableSelectTypeModel = `${TABLE_SELECT_TYPE}`;

export type TableSortTypeModel = `${TABLE_SORT_TYPE}`;

export type TableColumnModel<TType, TKey extends StringKeyModel<TType>> = WithIdModel<TKey> & {
  align?: FontAlignModel;
  formatter?: TableColumnFormatterModel<TType, TKey>;
  label?: TranslatableTextModel;
  renderer?: TableColumnRendererModel<TType>;
  sort?: TableSortTypeModel | boolean;
  width?: number;
};

export type TableColumnRendererModel<TType> = (params: { row: TType; value?: string }) => ReactNode;

export type TableColumnFormatterModel<TType, TKey extends StringKeyModel<TType>> = (params: {
  row: TType;
  value: TType[TKey];
}) => string;

export type TableRenderModel<TType> = Pick<
  TableColumnModel<TType, StringKeyModel<TType>>,
  'align' | 'width'
>;

export type TableHeaderModel<TType> = WithIdModel<StringKeyModel<TType>> &
  TableRenderModel<TType> & {
    label: string;
  };

export type TableRowModel<TType> = WithIdModel & {
  cells: Array<TableCellModel<TType>>;
  value: TType;
};

export type TableCellModel<TType> = WithIdModel<StringKeyModel<TType>> &
  TableRenderModel<TType> &
  Pick<TableColumnModel<TType, StringKeyModel<TType>>, 'renderer'> & {
    value?: string;
    width?: number;
  };
