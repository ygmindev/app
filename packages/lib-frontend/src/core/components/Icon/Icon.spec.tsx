import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<IconPropsModel>({
  defaultProps: {
    icon: 'times',
  },
  target: Icon,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
