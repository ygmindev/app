import { ErrorContainer } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer';
import type { ErrorContainerPropsModel } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ErrorContainerPropsModel>({ target: ErrorContainer });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
