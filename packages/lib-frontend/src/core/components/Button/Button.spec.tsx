import { Button } from '@lib/frontend/core/components/Button/Button';
import { press } from '@lib/frontend/testing/utils/press/press';
import { render } from '@lib/frontend/testing/utils/render/render';
import { waitForExpect } from '@lib/frontend/testing/utils/waitForExpect/waitForExpect';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent({ target: Button });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });

  test('press', async () => {
    const handlePress = jest.fn();
    const { queryByTestId } = render(<Component onPress={handlePress} />);
    press(queryByTestId(testID));
    await waitForExpect(() => expect(handlePress).toHaveBeenCalled());
  });
});
