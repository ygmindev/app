import { RatingAgencyTable } from '#lib-frontend/funding/containers/RatingAgencyTable/RatingAgencyTable';
import { type RatingAgencyTablePropsModel } from '#lib-frontend/funding/containers/RatingAgencyTable/RatingAgencyTable.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RatingAgencyTablePropsModel>({
  target: RatingAgencyTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
