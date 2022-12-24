import { Text } from '@lib/frontend/core/components/Text/Text';
import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TextPropsModel>({ target: Text });

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
      <Component>{({ t }) => t('test:labels.testWithString')}</Component>,
    );
    expect(queryByText('test with string')).toBeTruthy();
  });
});
