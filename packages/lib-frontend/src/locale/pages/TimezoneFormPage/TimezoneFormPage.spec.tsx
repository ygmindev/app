import { TimezoneFormPage } from '@lib/frontend/locale/pages/TimezoneFormPage/TimezoneFormPage';
import type { TimezoneFormPagePropsModel } from '@lib/frontend/locale/pages/TimezoneFormPage/TimezoneFormPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TimezoneFormPagePropsModel>({
  target: TimezoneFormPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
