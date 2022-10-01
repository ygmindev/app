import type { ReactElement } from 'react';

export interface _RenderModel {
  queryByTestId(testId: string): ReactElement;
  queryByText(testId: string): ReactElement;
  unmount(): void;
}
