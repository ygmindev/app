import { IconText } from '@lib/frontend/core/components/IconText/IconText';
import type { IconTextPropsModel } from '@lib/frontend/core/components/IconText/IconText.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<IconTextPropsModel>({
  target: IconText,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
