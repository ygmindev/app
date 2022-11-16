import { Image } from '@lib/frontend/core/components/Image/Image';
import type { ImagePropsModel } from '@lib/frontend/core/components/Image/Image.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ImagePropsModel>({
  defaultProps: {
    src: '',
  },
  target: Image,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
