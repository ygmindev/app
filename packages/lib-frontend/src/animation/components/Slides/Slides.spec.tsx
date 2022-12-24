import { Slides } from '@lib/frontend/animation/components/Slides/Slides';
import type { SlidesPropsModel } from '@lib/frontend/animation/components/Slides/Slides.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const FIRST_CHILDREN = 'FIRST_CHILDREN';
const SECOND_CHILDREN = 'SECOND_CHILDREN';

const { Component, displayName, testID } = withTestComponent<SlidesPropsModel>({
  defaultProps: {
    children: [<WrapperFixture text={FIRST_CHILDREN} />, <WrapperFixture text={SECOND_CHILDREN} />],
    current: 0,
  },
  target: Slides,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
