import { Root } from '@lib/frontend/root/containers/Root/Root';
import type { RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import { Router } from '@lib/frontend/route/containers/Router/Router';
import type {
  _RenderModel,
  _RenderParamsModel,
} from '@lib/frontend/test/utils/render/_render.models';
import { render, screen } from '@testing-library/react';
import type { ReactElement } from 'react';

export const _render = (element: _RenderParamsModel): _RenderModel => {
  const { unmount } = render(element, {
    wrapper: (props: RootPropsModel) => (
      <Root {...props}>
        <Router routes={[{ element, pathname: '/' }]} />
      </Root>
    ),
  });
  return {
    queryByTestId: (testId: string) => screen.queryByTestId(testId) as unknown as ReactElement,
    queryByText: (text: string) => screen.queryByText(text) as unknown as ReactElement,
    unmount,
  };
};
