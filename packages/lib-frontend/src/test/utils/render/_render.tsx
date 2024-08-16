import {
  type _RenderModel,
  type _RenderParamsModel,
} from '@lib/frontend/test/utils/render/_render.models';
import { render, screen } from '@testing-library/react';
import { type JSXElementConstructor, type ReactElement, type ReactNode } from 'react';

export const _render = ({ Wrapper, element }: _RenderParamsModel): _RenderModel => {
  const { unmount } = render(element, {
    wrapper: Wrapper as JSXElementConstructor<{ children: ReactNode }>,
  });
  return {
    findByTestId: async (testId: string) =>
      screen.findByTestId(testId) as unknown as Promise<ReactElement>,
    findByText: async (text: string) => screen.findByText(text) as unknown as Promise<ReactElement>,
    unmount,
  };
};
