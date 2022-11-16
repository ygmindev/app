import { Svg } from '@lib/frontend/core/components/Svg/Svg';
import type { SvgPropsModel } from '@lib/frontend/core/components/Svg/Svg.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SvgPropsModel>({ target: Svg });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
