import { SearchField } from '#lib-frontend/search/components/SearchField/SearchField';
import { type SearchFieldPropsModel } from '#lib-frontend/search/components/SearchField/SearchField.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SearchFieldPropsModel>({
  target: SearchField,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
