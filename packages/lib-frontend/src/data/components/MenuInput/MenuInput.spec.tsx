import { type OptionModel } from '@lib/frontend/core/core.models';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import { type MenuInputPropsModel } from '@lib/frontend/data/components/MenuInput/MenuInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const OPTIONS: Array<OptionModel> = [];

const { Component, displayName, testID } = withTestComponent<MenuInputPropsModel>({
  defaultProps: {
    options: OPTIONS,
  },
  target: MenuInput,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
