import { BrightnessFormPage } from '#lib-frontend/style/pages/BrightnessFormPage/BrightnessFormPage';
import { type BrightnessFormPagePropsModel } from '#lib-frontend/style/pages/BrightnessFormPage/BrightnessFormPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<BrightnessFormPagePropsModel>({
  target: BrightnessFormPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
