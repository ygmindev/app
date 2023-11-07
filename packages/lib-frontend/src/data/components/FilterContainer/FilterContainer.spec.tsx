import { FilterContainer } from '#lib-frontend/data/components/FilterContainer/FilterContainer';
import { type FilterContainerPropsModel } from '#lib-frontend/data/components/FilterContainer/FilterContainer.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FilterContainerPropsModel>({ target: FilterContainer });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
