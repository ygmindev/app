import type { _TablePropsModel } from '@lib/frontend/core/components/Table/_Table.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { ReactNode } from 'react';

export interface TableColumnModel<TType, TValue> {
  field: string;
  flex?: number;
  isHidden?: boolean;
  isPinned?: boolean;
  name?: TranslationTextModel;
  renderer?: TableColumnRendererModel<TType, TValue>;
  sort?: 'asc' | 'desc';
  width?: number;
}

export type TableColumnRendererModel<TType, TValue> = (params: {
  row: TType;
  value: TValue;
}) => ReactNode;

export interface TablePropsModel<TType> extends _TablePropsModel<TType>, WithTestIdModel {}
