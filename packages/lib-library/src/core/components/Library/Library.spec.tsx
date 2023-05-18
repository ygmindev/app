import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';
import { Library } from '@lib/library/core/components/Library/Library';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

const { Component, displayName, testID } = withTestComponent<LibraryPropsModel>({
  target: Library,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
