import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { ComponentType, ReactElement } from 'react';

export interface _RenderParamsModel {
  Wrapper?: ComponentType<ChildrenPropsModel<ReactElement>>;
  element: ReactElement;
}

export interface _RenderModel {
  findByTestId(testId: string): Promise<ReactElement>;
  findByText(testId: string): Promise<ReactElement>;
  unmount(): void;
}
