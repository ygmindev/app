import { Text } from '@lib/frontend/core/components/Text/Text';
import { type TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TextPropsModel>({ target: Text });

describe(displayName, () => {
  const TEST = 'test';

  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });

  test('children', async () => {
    const { findByText } = await render({ element: <Component>{TEST}</Component> });
    expect(await findByText(TEST)).toBeTruthy();
  });
});
