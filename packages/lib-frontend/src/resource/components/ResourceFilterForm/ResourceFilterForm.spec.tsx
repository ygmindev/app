import { ResourceFilterForm } from '#lib-frontend/resource/components/ResourceFilterForm/ResourceFilterForm';
import { type ResourceFilterFormPropsModel } from '#lib-frontend/resource/components/ResourceFilterForm/ResourceFilterForm.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ResourceFilterFormPropsModel>({ target: ResourceFilterForm });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
