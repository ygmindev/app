import { SvgShape } from '@lib/frontend/core/components/SvgShape/SvgShape';
import type { SvgShapePropsModel } from '@lib/frontend/core/components/SvgShape/SvgShape.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SvgShapePropsModel>({
  target: SvgShape,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
