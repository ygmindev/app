import { SubmittableButtons } from '@lib/frontend/data/components/SubmittableButtons/SubmittableButtons';
import { type SubmittableButtonsPropsModel } from '@lib/frontend/data/components/SubmittableButtons/SubmittableButtons.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SubmittableButtonsPropsModel>({
  target: SubmittableButtons,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
