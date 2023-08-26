import { AmountForm } from '#lib-frontend/funding/containers/AmountForm/AmountForm';
import { type AmountFormPropsModel } from '#lib-frontend/funding/containers/AmountForm/AmountForm.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AmountFormPropsModel>({ target: AmountForm });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
