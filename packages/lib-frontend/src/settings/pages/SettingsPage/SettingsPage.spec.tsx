import { SettingsPage } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage';
import type { SettingsPagePropsModel } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SettingsPagePropsModel>({
  target: SettingsPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
