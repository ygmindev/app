import { SearchInput } from '@lib/frontend/search/components/SearchInput/SearchInput';
import { type SearchInputPropsModel } from '@lib/frontend/search/components/SearchInput/SearchInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SearchInputPropsModel>({
  target: SearchInput,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
