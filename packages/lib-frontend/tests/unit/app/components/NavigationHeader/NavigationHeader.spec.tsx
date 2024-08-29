import { NavigationHeader } from '@lib/frontend/app/components/NavigationHeader/NavigationHeader';
import { type NavigationHeaderPropsModel } from '@lib/frontend/app/components/NavigationHeader/NavigationHeader.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<NavigationHeaderPropsModel>({ target: NavigationHeader });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
