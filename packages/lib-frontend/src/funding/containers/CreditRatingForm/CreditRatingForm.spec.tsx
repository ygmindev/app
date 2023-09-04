import { CreditRatingForm } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm';
import { type CreditRatingFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<CreditRatingFormPropsModel>({
  target: CreditRatingForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
