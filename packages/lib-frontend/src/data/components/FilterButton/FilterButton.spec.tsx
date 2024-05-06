import { FilterButton } from '@lib/frontend/data/components/FilterButton/FilterButton';
import { type FilterButtonPropsModel } from '@lib/frontend/data/components/FilterButton/FilterButton.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FilterButtonPropsModel>({ target: FilterButton });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
