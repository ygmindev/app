import { RouteLineItem } from '#lib-frontend/route/components/RouteLineItem/RouteLineItem';
import { type RouteLineItemPropsModel } from '#lib-frontend/route/components/RouteLineItem/RouteLineItem.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RouteLineItemPropsModel>({
  target: RouteLineItem,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
