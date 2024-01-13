import { BrightnessField } from '@lib-frontend/style/components/BrightnessField/BrightnessField';
import { type BrightnessFieldPropsModel } from '@lib-frontend/style/components/BrightnessField/BrightnessField.models';
import { render } from '@lib-frontend/test/utils/render/render';
import { withTestComponent } from '@lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<BrightnessFieldPropsModel>({ target: BrightnessField });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
