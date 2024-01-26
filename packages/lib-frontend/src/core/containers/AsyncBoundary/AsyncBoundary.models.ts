import { type ItemPropsModel } from '@lib/frontend/core/components/Item/Item.models';
import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { type ReactElement } from 'react';

export type ErrorContextModel = Omit<ItemPropsModel, 'color' | 'title'> & {
  title?: TranslatableTextModel;
};

export type AsyncBoundaryContextModel = {
  errorContextGet?(error: Error): ErrorContextModel | undefined;
  errorContextSet(value: Omit<ErrorContextModel, 'id'>): void;
  handleRefresh(): void;
};

export type AsyncBoundaryPropsModel = ChildrenPropsModel &
  Pick<AsyncBoundaryContextModel, 'errorContextGet'> & {
    fallback?: ReactElement;
    onRefresh?(): Promise<void>;
  };
