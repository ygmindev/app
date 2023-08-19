import { ResourceFilterForm } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField';
import { type ResourceFilterFieldPropsModel } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ResourceFilterFieldPropsModel>({
  target: ResourceFilterForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
