import { AppHeader } from '@lib/frontend/app/containers/AppHeader/AppHeader';
import { type AppHeaderPropsModel } from '@lib/frontend/app/containers/AppHeader/AppHeader.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AppHeaderPropsModel>({
  target: AppHeader,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
