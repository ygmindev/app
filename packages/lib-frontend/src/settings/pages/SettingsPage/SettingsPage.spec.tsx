import { SettingsPage } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage';
import type { SettingsPagePropsModel } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SettingsPagePropsModel>({
  target: SettingsPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
