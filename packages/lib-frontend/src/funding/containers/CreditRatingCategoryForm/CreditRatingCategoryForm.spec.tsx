import { CreditRatingCategoryForm } from '#lib-frontend/funding/containers/CreditRatingCategoryForm/CreditRatingCategoryForm';
import { type CreditRatingCategoryFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingCategoryForm/CreditRatingCategoryForm.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<CreditRatingCategoryFormPropsModel>({
  target: CreditRatingCategoryForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
