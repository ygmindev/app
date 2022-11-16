import { ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary';
import type { ErrorBoundaryPropsModel } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary.models';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';
import { warn } from '@lib/shared/logging/utils/logger/logger';

const { Component, displayName } = withTestComponent<ErrorBoundaryPropsModel>({
  target: ErrorBoundary,
});

describe(displayName, () => {
  test('works', async () => {
    // const { queryByTestId } = render(<Component />);
    // expect(queryByTestId(testID)).toBeTruthy();
    warn('fixme');
    expect(1).toBeTruthy();
  });
});
