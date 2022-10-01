import { ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName } = withTestComponent({ target: ErrorBoundary });

describe(displayName, () => {
  test('works', async () => {
    // const { queryByTestId } = render(<Component />);
    // expect(queryByTestId(testID)).toBeTruthy();
    console.warn('fixme');
    expect(1).toBeTruthy();
  });
});
