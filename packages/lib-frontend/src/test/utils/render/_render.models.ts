import type { ComponentType, ReactElement } from 'react';

import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';

export type _RenderParamsModel = {
  Wrapper?: ComponentType<ChildrenPropsModel<ReactElement>>;
  element: ReactElement;
};

export type _RenderModel = {
  findByTestId(testId: string): Promise<ReactElement>;
  findByText(testId: string): Promise<ReactElement>;
  unmount(): void;
};
