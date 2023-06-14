import { StepForm } from '#lib-frontend/form/components/StepForm/StepForm';
import type { StepFormPropsModel } from '#lib-frontend/form/components/StepForm/StepForm.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<StepFormPropsModel>({
  target: StepForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
