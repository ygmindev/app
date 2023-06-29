import { type OptionModel } from '#lib-frontend/core/core.models';
import { SelectField } from '#lib-frontend/form/components/SelectField/SelectField';
import { type SelectFieldPropsModel } from '#lib-frontend/form/components/SelectField/SelectField.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const OPTIONS: Array<OptionModel> = [];

const { Component, displayName, testID } = withTestComponent<SelectFieldPropsModel>({
  defaultProps: {
    options: OPTIONS,
  },
  target: SelectField,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
