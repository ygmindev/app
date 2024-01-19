import { type OptionModel } from '@lib/frontend/core/core.models';
import { DropdownInput } from '@lib/frontend/data/components/DropdownInput/DropdownInput';
import { type DropdownInputPropsModel } from '@lib/frontend/data/components/DropdownInput/DropdownInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const OPTIONS: Array<OptionModel> = [];

const { Component, displayName, testID } = withTestComponent<DropdownInputPropsModel>({
  defaultProps: {
    options: OPTIONS,
  },
  target: DropdownInput,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
