import { TimingFormPage } from '@lib/frontend/aroom/pages/TimingFormPage/TimingFormPage';
import { type TimingFormPagePropsModel } from '@lib/frontend/aroom/pages/TimingFormPage/TimingFormPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TimingFormPagePropsModel>({
  target: TimingFormPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
