import { ErrorTooltip } from '@lib/frontend/form/components/ErrorTooltip/ErrorTooltip';
import type { ErrorTooltipPropsModel } from '@lib/frontend/form/components/ErrorTooltip/ErrorTooltip.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ErrorTooltipPropsModel>({
  target: ErrorTooltip,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});