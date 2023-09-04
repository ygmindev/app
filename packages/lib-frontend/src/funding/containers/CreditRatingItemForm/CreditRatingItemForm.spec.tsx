import { CreditRatingItemForm } from '#lib-frontend/funding/containers/CreditRatingItemForm/CreditRatingItemForm';
import { type CreditRatingItemFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingItemForm/CreditRatingItemForm.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<CreditRatingItemFormPropsModel>({
  target: CreditRatingItemForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
