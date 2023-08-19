import { type ReactNode } from 'react';

import { type _TablePropsModel } from '#lib-frontend/core/components/Table/_Table.models';
import {
  type COLUMN_SORT_TYPE,
  type TABLE_SELECT_TYPE,
} from '#lib-frontend/core/components/Table/Table.constants';
import { type ElementStatePropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type TableSelectTypeModel = `${TABLE_SELECT_TYPE}`;

export type ColumnSortTypeModel = `${COLUMN_SORT_TYPE}`;

export type TableColumnModel<
  TType extends Record<string, unknown>,
  TKey extends StringKeyModel<TType>,
> = WithIdModel<TKey> & {
  formatter?: TableColumnFormatterModel<TType, TKey>;
  label?: TranslatableTextModel;
  renderer?: TableColumnRendererModel<TType, TKey>;
  sort?: ColumnSortTypeModel | boolean;
  width?: number;
};

export type TableColumnRendererModel<
  TType extends Record<string, unknown>,
  TKey extends StringKeyModel<TType>,
> = (params: { row: TType; value: TType[TKey] }) => ReactNode;

export type TableColumnFormatterModel<
  TType extends Record<string, unknown>,
  TKey extends StringKeyModel<TType>,
> = (params: { row: TType; value: TType[TKey] }) => string;

export type TablePropsModel<TType extends Record<string, unknown>> = ElementStatePropsModel &
  _TablePropsModel<TType>;
