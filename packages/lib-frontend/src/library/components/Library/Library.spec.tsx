import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';
import { Library } from '@lib/frontend/library/components/Library/Library';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

const { Component, displayName, testID } = withTestComponent<LibraryPropsModel<unknown>>({
  target: Library,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
