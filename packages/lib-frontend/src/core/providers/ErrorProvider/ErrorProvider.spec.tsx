import { ErrorProvider } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider';
import type { ErrorProviderPropsModel } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ErrorProviderPropsModel>({
  target: ErrorProvider,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});