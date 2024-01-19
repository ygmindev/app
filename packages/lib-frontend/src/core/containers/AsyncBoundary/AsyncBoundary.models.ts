import { type ReactElement } from 'react';

import { type ItemPropsModel } from '@lib/frontend/core/components/Item/Item.models';
import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';

export type ErrorContextModel = Omit<ItemPropsModel, 'color'>;

export type AsyncBoundaryContextModel = {
  errorContextGet?(error: Error): ItemPropsModel | undefined;
  errorContextSet(value: ErrorContextModel): void;
  handleRefresh(): void;
};

export type AsyncBoundaryPropsModel = ChildrenPropsModel &
  Pick<AsyncBoundaryContextModel, 'errorContextGet'> & {
    fallback?: ReactElement;
    onRefresh?(): Promise<void>;
  };
