import { render, screen } from '@testing-library/react';
import type { ReactElement } from 'react';

import type {
  _RenderModel,
  _RenderParamsModel,
} from '#lib-frontend/test/utils/render/_render.models';

export const _render = ({ Wrapper, element }: _RenderParamsModel): _RenderModel => {
  const { unmount } = render(element, { wrapper: Wrapper });
  return {
    findByTestId: async (testId: string) =>
      screen.findByTestId(testId) as unknown as Promise<ReactElement>,
    findByText: async (text: string) => screen.findByText(text) as unknown as Promise<ReactElement>,
    unmount,
  };
};
