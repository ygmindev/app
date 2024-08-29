import { type RedirectPropsModel } from '@lib/frontend/route/components/Redirect/Redirect.models';
import { Redirect } from '@lib/frontend/route/components/Redirect/Redirect';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RedirectPropsModel>({
  target: Redirect,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
