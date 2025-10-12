import { AppContainer } from '@lib/frontend/app/containers/AppContainer/AppContainer';
import { type AppContainerPropsModel } from '@lib/frontend/app/containers/AppContainer/AppContainer.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AppContainerPropsModel>({
  target: AppContainer,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
