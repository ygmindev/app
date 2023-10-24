import { FundingTile } from '#lib-frontend/funding/components/FundingTile/FundingTile';
import { type FundingTilePropsModel } from '#lib-frontend/funding/components/FundingTile/FundingTile.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FundingTilePropsModel>({ target: FundingTile });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
