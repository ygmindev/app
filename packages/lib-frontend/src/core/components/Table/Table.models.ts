import type { _TablePropsModel } from '@lib/frontend/core/components/Table/_Table.models';
import type {
  COLUMN_PIN_TYPE,
  COLUMN_SORT_TYPE,
  TABLE_SELECT_TYPE,
} from '@lib/frontend/core/components/Table/Table.constants';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactNode } from 'react';

export type TableSelectTypeModel = `${TABLE_SELECT_TYPE}`;

export type ColumnSortTypeModel = `${COLUMN_SORT_TYPE}`;

export type ColumnPinTypeModel = `${COLUMN_PIN_TYPE}`;

export interface TableColumnModel<TType, TValue> {
  flex?: number;
  formatter?: TableColumnFormatterModel<TType, TValue>;
  id: string;
  isHidden?: boolean;
  label?: TranslationTextModel;
  pin?: ColumnPinTypeModel;
  renderer?: TableColumnRendererModel<TType, TValue>;
  sort?: ColumnSortTypeModel | boolean;
  width?: number;
}

export type TableColumnRendererModel<TType, TValue> = (params: {
  row: TType;
  value: TValue;
}) => ReactNode;

export type TableColumnFormatterModel<TType, TValue> = (params: {
  row: TType;
  value: TValue;
}) => string;

export interface TableRefModel {
  deselectRows: CallableModel;
}

export interface TablePropsModel<TType> extends _TablePropsModel<TType>, WithTestIdModel {
  isLoading?: boolean;
}
