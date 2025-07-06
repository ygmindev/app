import { SearchInputCompact } from '@lib/frontend/search/components/SearchInputCompact/SearchInputCompact';
import { type SearchInputCompactPropsModel } from '@lib/frontend/search/components/SearchInputCompact/SearchInputCompact.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SearchInputCompactPropsModel>({ target: SearchInputCompact });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
