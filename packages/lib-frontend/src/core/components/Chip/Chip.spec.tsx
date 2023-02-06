import { Chip } from '@lib/frontend/core/components/Chip/Chip';
import type { ChipPropsModel } from '@lib/frontend/core/components/Chip/Chip.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ChipPropsModel>({ target: Chip });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});