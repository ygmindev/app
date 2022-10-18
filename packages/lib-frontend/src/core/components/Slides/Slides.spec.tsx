import { Slides } from '@lib/frontend/core/components/Slides/Slides';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const FIRST_CHILDREN = 'FIRST_CHILDREN';
const SECOND_CHILDREN = 'SECOND_CHILDREN';

const { Component, displayName, testID } = withTestComponent({
  defaultProps: {
    current: 0,
    slides: [
      { Component: () => <WrapperFixture text={FIRST_CHILDREN} />, id: FIRST_CHILDREN },
      { Component: () => <WrapperFixture text={SECOND_CHILDREN} />, id: SECOND_CHILDREN },
    ],
  },
  target: Slides,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
