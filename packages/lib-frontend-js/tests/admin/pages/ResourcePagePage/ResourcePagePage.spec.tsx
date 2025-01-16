import { ResourcePagePage } from '@lib/frontend/admin/pages/ResourcePagePage/ResourcePagePage';
import { type ResourcePagePagePropsModel } from '@lib/frontend/admin/pages/ResourcePagePage/ResourcePagePage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ResourcePagePagePropsModel>({
  target: ResourcePagePage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
