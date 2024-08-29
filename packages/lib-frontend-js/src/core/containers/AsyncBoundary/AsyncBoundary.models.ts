import { type TitlePropsModel } from '@lib/frontend/core/components/Title/Title.models';
import { type AsyncTextModel, type ChildPropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export type ErrorContextModel = Omit<TitlePropsModel, 'color' | 'title'> & {
  title?: AsyncTextModel;
};

export type AsyncBoundaryContextModel = {
  errorContextGet?(error: Error): ErrorContextModel | undefined;
  errorContextSet(value: Omit<ErrorContextModel, 'id'>): void;
  handleRefresh(): void;
};

export type AsyncBoundaryPropsModel = ChildPropsModel<ReactElement> &
  Pick<AsyncBoundaryContextModel, 'errorContextGet'> & {
    fallback?: ReactElement;
    onRefresh?(): Promise<void>;
  };
