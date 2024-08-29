import { AppProvider } from '@lib/frontend/app/containers/AppProvider/AppProvider';
import { type AppProviderPropsModel } from '@lib/frontend/app/containers/AppProvider/AppProvider.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AppProviderPropsModel>({
  target: AppProvider,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
