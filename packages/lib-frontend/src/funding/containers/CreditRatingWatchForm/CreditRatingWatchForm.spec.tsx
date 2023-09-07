import { CreditRatingWatchForm } from '#lib-frontend/funding/containers/CreditRatingWatchForm/CreditRatingWatchForm';
import { type CreditRatingWatchFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingWatchForm/CreditRatingWatchForm.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<CreditRatingWatchFormPropsModel>({
  target: CreditRatingWatchForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
