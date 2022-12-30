import type { ReactElement } from 'react';

export type _RenderParamsModel = ReactElement;

export interface _RenderModel {
  queryByTestId(testId: string): ReactElement;
  queryByText(testId: string): ReactElement;
  unmount(): void;
}
