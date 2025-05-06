import { type ChildPropsModel, type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type ComponentType, type ReactElement } from 'react';

export type _RenderParamsModel = {
  Wrapper?: ComponentType<ChildrenPropsModel<ReactElement<ChildPropsModel>>>;
  element: ReactElement;
};

export type _RenderModel = {
  findByTestId(testId: string): Promise<ReactElement>;
  findByText(testId: string): Promise<ReactElement>;
  unmount(): void;
};
