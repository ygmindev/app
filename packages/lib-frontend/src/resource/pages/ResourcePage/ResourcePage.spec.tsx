import { ResourcePage } from '@lib/frontend/resource/pages/ResourcePage/ResourcePage';
import { type ResourcePagePropsModel } from '@lib/frontend/resource/pages/ResourcePage/ResourcePage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ResourcePagePropsModel>({
  target: ResourcePage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
