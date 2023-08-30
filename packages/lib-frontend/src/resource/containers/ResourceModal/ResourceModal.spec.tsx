import { ResourceModal } from '#lib-frontend/resource/containers/ResourceModal/ResourceModal';
import { type ResourceModalPropsModel } from '#lib-frontend/resource/containers/ResourceModal/ResourceModal.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ResourceModalPropsModel>({ target: ResourceModal });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
