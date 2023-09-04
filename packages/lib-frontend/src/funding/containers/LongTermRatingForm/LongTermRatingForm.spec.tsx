import { LongTermRatingForm } from '#lib-frontend/funding/containers/LongTermRatingForm/LongTermRatingForm';
import { type LongTermRatingFormPropsModel } from '#lib-frontend/funding/containers/LongTermRatingForm/LongTermRatingForm.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<LongTermRatingFormPropsModel>({
  target: LongTermRatingForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
