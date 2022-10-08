import type { _TablePropsModel } from '@lib/frontend/core/components/Table/_Table.models';
import type {
  TABLE_SELECT_TYPE,
  TABLE_SORT_TYPE,
} from '@lib/frontend/core/components/Table/Table.constants';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactNode } from 'react';

export type TableSelectTypeModel = `${TABLE_SELECT_TYPE}`;

export type TableSortTypeModel = `${TABLE_SORT_TYPE}`;

export interface TableColumnModel<TType, TValue> {
  field: string;
  flex?: number;
  formatter?: TableColumnFormatterModel<TType, TValue>;
  isHidden?: boolean;
  isPinned?: boolean;
  name?: TranslationTextModel;
  renderer?: TableColumnRendererModel<TType, TValue>;
  sort?: TableSortTypeModel;
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

export interface TableRefModel<TType> {
  deselectRows: CallableModel;
}

export interface TablePropsModel<TType> extends _TablePropsModel<TType>, WithTestIdModel {}
