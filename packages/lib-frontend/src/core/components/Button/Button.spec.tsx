import { Button } from '@lib/frontend/core/components/Button/Button';
import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { press } from '@lib/frontend/test/utils/press/press';
import { render } from '@lib/frontend/test/utils/render/render';
import { waitForExpect } from '@lib/frontend/test/utils/waitForExpect/waitForExpect';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ButtonPropsModel>({ target: Button });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });

  test('press', async () => {
    const handlePress = jest.fn();
    const { findByTestId } = await render({ element: <Component onPress={handlePress} /> });
    press(await findByTestId(testID));
    await waitForExpect(async () => expect(handlePress).toHaveBeenCalled());
  });
});
