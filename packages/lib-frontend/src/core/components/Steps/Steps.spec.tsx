import { Steps } from '@lib/frontend/core/components/Steps/Steps';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const FIRST_CHILDREN = 'FIRST_CHILDREN';
const SECOND_CHILDREN = 'SECOND_CHILDREN';

const { Component, displayName, testID } = withTestComponent({
  defaultProps: {
    children: [<WrapperFixture text={FIRST_CHILDREN} />, <WrapperFixture text={SECOND_CHILDREN} />],
  },
  target: Steps,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
