import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import {
  type DataFormatterModel,
  type DataRendererModel,
  type InputPropsModel,
} from '@lib/frontend/data/data.models';
import {
  type _UseTableModel,
  type _UseTableParamsModel,
} from '@lib/frontend/data/hooks/useTable/_useTable.models';
import { type TABLE_SELECT_TYPE } from '@lib/frontend/data/hooks/useTable/useTable.constants';
import { type FontAlignModel } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type FormattableTypeModel } from '@lib/shared/data/data.models';
import { type ReactElement } from 'react';

export type UseTableParamsModel<TType extends unknown> = _UseTableParamsModel<TType>;

export type UseTableModel<TType extends unknown> = _UseTableModel<TType>;

export type TableSelectTypeModel = `${TABLE_SELECT_TYPE}`;

export type TableSortModel<TType extends unknown> = WithIdModel<StringKeyModel<TType>> & {
  isDescending?: boolean;
};

export type TableColumnModel<
  TType,
  TKey extends StringKeyModel<TType> = StringKeyModel<TType>,
> = WithIdModel<TKey> & {
  align?: FontAlignModel;
  field?(params: {
    index?: number;
    row?: TType;
    value?: TType[TKey];
  }): ReactElement<InputPropsModel<TType[TKey]>>;
  formatter?: DataFormatterModel<TType, TKey>;
  headerRenderer?(): ReactElement;
  isArray?: boolean;
  isFilterDisabled?: boolean;
  isFrozen?: boolean;
  isHidden?: boolean;
  isSortable?: boolean;
  label?: AsyncTextModel;
  options?: Array<TranslatableOptionModel>;
  renderer?: DataRendererModel<TType, TKey>;
  type?: FormattableTypeModel;
  width?: number;
};

export type TableRenderModel<TType> = Pick<
  TableColumnModel<TType>,
  'align' | 'width' | 'headerRenderer' | 'isFrozen' | 'isHidden'
>;

export type TableHeaderModel<TType> = WithIdModel<StringKeyModel<TType>> &
  TableRenderModel<TType> & {
    label: string;
  };

export type TableRowModel<TType> = WithIdModel & {
  cells: Array<TableCellModel<TType>>;
  value: TType;
};

export type TableCellModel<
  TType,
  TKey extends StringKeyModel<TType> = StringKeyModel<TType>,
> = WithIdModel<StringKeyModel<TType>> &
  TableRenderModel<TType> &
  Pick<TableColumnModel<TType>, 'field' | 'label' | 'renderer'> & {
    columnId?: TKey;
    value?: TType[TKey];
    width?: number;
  };
