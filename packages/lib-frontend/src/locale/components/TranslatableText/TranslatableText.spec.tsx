import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent({ target: TranslatableText });

describe(displayName, () => {
  const TEST = 'test:testWithString';

  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });

  test('works with children', async () => {
    const { findByText } = await render({ element: <Component>{TEST}</Component> });
    expect(await findByText('test with string')).toBeTruthy();
  });

  test('works with function children', async () => {
    const { findByText } = await render({ element: <Component>{({ t }) => t(TEST)}</Component> });
    expect(await findByText('test with string')).toBeTruthy();
  });
});
