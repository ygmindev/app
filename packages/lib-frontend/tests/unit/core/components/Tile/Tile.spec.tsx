import { Tile } from '@lib/frontend/core/components/Tile/Tile';
import { type TilePropsModel } from '@lib/frontend/core/components/Tile/Tile.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TilePropsModel>({ target: Tile });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
