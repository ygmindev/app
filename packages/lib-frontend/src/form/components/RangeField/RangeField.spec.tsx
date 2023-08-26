import { RangeField } from '#lib-frontend/form/components/RangeField/RangeField';
import { type RangeFieldPropsModel } from '#lib-frontend/form/components/RangeField/RangeField.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RangeFieldPropsModel>({ target: RangeField });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
