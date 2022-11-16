import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<IconPropsModel>({
  defaultProps: {
    icon: ICON.times,
  },
  target: Icon,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
