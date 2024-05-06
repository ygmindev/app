import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';
import { LibraryPage } from '@lib/library/core/pages/LibraryPage/LibraryPage';
import { type LibraryPagePropsModel } from '@lib/library/core/pages/LibraryPage/LibraryPage.models';

const { Component, displayName, testID } = withTestComponent<LibraryPagePropsModel>({
  target: LibraryPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
