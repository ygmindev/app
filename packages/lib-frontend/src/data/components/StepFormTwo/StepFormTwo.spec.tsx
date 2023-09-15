import { StepFormTwo } from '#lib-frontend/data/components/StepFormTwo/StepFormTwo';
import { type StepFormTwoPropsModel } from '#lib-frontend/data/components/StepFormTwo/StepFormTwo.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<StepFormTwoPropsModel>({ target: StepFormTwo });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
