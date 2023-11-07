import { FilterGroup } from '#lib-frontend/data/components/FilterGroup/FilterGroup';
import { type FilterGroupPropsModel } from '#lib-frontend/data/components/FilterGroup/FilterGroup.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FilterGroupPropsModel>({ target: FilterGroup });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
