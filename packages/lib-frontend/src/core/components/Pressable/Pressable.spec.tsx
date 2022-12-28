import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<Pressable>({ target: Pressable });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
