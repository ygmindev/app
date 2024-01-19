import { ResourceDetailPage } from '@lib/frontend/resource/pages/ResourceDetailPage/ResourceDetailPage';
import { type ResourceDetailPagePropsModel } from '@lib/frontend/resource/pages/ResourceDetailPage/ResourceDetailPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ResourceDetailPagePropsModel>({
  target: ResourceDetailPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
