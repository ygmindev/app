import { Root } from '@lib/frontend/root/containers/Root/Root';
import type { RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import { STORE_FIXTURE } from '@lib/frontend/root/stores/store/store.fixtures';
import { Router } from '@lib/frontend/routing/containers/Router/Router';
import type { _RenderModel } from '@lib/frontend/testing/utils/render/_render.models';
import { render, screen } from '@testing-library/react';
import type { ReactElement } from 'react';

export const _render = (element: ReactElement): _RenderModel => {
  const { unmount } = render(element, {
    wrapper: (props: RootPropsModel) => (
      <Root
        {...props}
        intialStore={STORE_FIXTURE}>
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
