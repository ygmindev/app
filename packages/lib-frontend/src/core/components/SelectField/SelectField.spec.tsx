import { SelectField } from '@lib-frontend/core/components/SelectField/SelectField';
import { type SelectFieldPropsModel } from '@lib-frontend/core/components/SelectField/SelectField.models';
import { render } from '@lib-frontend/test/utils/render/render';
import { withTestComponent } from '@lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SelectFieldPropsModel>({
  target: SelectField,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
