import { type DataFormatterModel, type DataRendererModel } from '#lib-frontend/data/data.models';
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
import { type DataTypeModel, type FieldTypeModel } from '#lib-shared/data/data.models';

export type UseTableParamsModel<TType> = _UseTableParamsModel<TType>;

export type UseTableModel<TType> = _UseTableModel<TType>;

export type TableSelectTypeModel = `${TABLE_SELECT_TYPE}`;

export type TableSortTypeModel = `${TABLE_SORT_TYPE}`;

export type TableColumnModel<
  TType,
  TKey extends StringKeyModel<TType> = StringKeyModel<TType>,
> = WithIdModel<TKey> & {
  align?: FontAlignModel;
  formatter?: DataFormatterModel<TType, TKey>;
  label?: TranslatableTextModel;
  renderer?: DataRendererModel<TType>;
  sort?: TableSortTypeModel | boolean;
  type?: DataTypeModel | FieldTypeModel;
  width?: number;
};

export type TableRenderModel<TType> = Pick<TableColumnModel<TType>, 'align' | 'width'>;

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
  Pick<TableColumnModel<TType>, 'renderer'> & {
    value?: string;
    width?: number;
  };
