import { ContextProvider } from '@lib/frontend/root/containers/ContextProvider/ContextProvider';
import { type ContextProviderPropsModel } from '@lib/frontend/root/containers/ContextProvider/ContextProvider.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ContextProviderPropsModel>({
  target: ContextProvider,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
