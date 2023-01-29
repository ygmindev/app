import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';
import { Library } from '@lib/library/core/components/Library/Library';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

const { Component, displayName, testID } = withTestComponent<LibraryPropsModel>({
  target: Library,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
