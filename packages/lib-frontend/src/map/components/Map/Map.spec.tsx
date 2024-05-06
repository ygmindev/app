import { type MapPropsModel } from '@lib/frontend/map/components/Map/Map.models';
import { Map } from '@lib/frontend/map/components/Map/Map';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<MapPropsModel>({
  target: Map,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
