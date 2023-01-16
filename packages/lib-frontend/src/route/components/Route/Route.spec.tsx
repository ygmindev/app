import { Route } from '@lib/frontend/route/components/Route/Route';
import type { RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RoutePropsModel>({ target: Route });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});