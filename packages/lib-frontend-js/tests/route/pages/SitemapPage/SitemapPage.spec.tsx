import { SitemapPage } from '@lib/frontend/route/pages/SitemapPage/SitemapPage';
import { type SitemapPagePropsModel } from '@lib/frontend/route/pages/SitemapPage/SitemapPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SitemapPagePropsModel>({
  target: SitemapPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
