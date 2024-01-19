import {
  type _RenderModel,
  type _RenderParamsModel,
} from '@lib/frontend/test/utils/render/_render.models';
import { render } from '@testing-library/react-native';
import { type ReactElement } from 'react';

export const _render = ({ Wrapper, element }: _RenderParamsModel): _RenderModel => {
  const { findByTestId, findByText, unmount } = render(element, { wrapper: Wrapper });
  return {
    findByTestId: async (testId: string) =>
      findByTestId(testId) as unknown as Promise<ReactElement>,
    findByText: async (text: string) => findByText(text) as unknown as Promise<ReactElement>,
    unmount,
  };
};
