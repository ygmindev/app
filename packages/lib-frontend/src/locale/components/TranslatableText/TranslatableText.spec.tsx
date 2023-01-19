import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent({ target: TranslatableText });

describe(displayName, () => {
  const TEST = 'test:labels.testWithString';

  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });

  test('works with children', async () => {
    const { queryByText } = render(<Component>{TEST}</Component>);
    expect(queryByText('test with string')).toBeTruthy();
  });

  test('works with function children', async () => {
    const { queryByText } = render(<Component>{({ t }) => t(TEST)}</Component>);
    expect(queryByText('test with string')).toBeTruthy();
  });
});
