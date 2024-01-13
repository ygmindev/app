import { type OptionModel } from '@lib-frontend/core/core.models';
import { DropdownField } from '@lib-frontend/data/components/DropdownField/DropdownField';
import { type DropdownFieldPropsModel } from '@lib-frontend/data/components/DropdownField/DropdownField.models';
import { render } from '@lib-frontend/test/utils/render/render';
import { withTestComponent } from '@lib-frontend/test/utils/withTestComponent/withTestComponent';

const OPTIONS: Array<OptionModel> = [];

const { Component, displayName, testID } = withTestComponent<DropdownFieldPropsModel>({
  defaultProps: {
    options: OPTIONS,
  },
  target: DropdownField,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
