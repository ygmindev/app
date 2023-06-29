import { RadioField } from '#lib-frontend/core/components/RadioField/RadioField';
import { type RadioFieldPropsModel } from '#lib-frontend/core/components/RadioField/RadioField.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RadioFieldPropsModel>({
  target: RadioField,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
