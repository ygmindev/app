import { Text } from '@lib/frontend/core/components/Text/Text';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent({ target: Text });

describe(displayName, () => {
  const TEST = 'test';

  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });

  test('works with string children', async () => {
    const { queryByText } = render(<Component>{TEST}</Component>);
    expect(queryByText(TEST)).toBeTruthy();
  });

  test('works with function children', async () => {
    const { queryByText } = render(
      <Component>{({ t }) => t('testing:labels.testingWithString')}</Component>,
    );
    expect(queryByText('testing with string')).toBeTruthy();
  });
});
