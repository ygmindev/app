import { NumberField } from '#lib-frontend/data/components/NumberField/NumberField';
import { type NumberFieldPropsModel } from '#lib-frontend/data/components/NumberField/NumberField.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<NumberFieldPropsModel>({ target: NumberField });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
