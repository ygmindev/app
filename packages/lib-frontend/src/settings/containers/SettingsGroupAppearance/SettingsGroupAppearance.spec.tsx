import { SettingsGroupAppearance } from '@lib/frontend/settings/containers/SettingsGroupAppearance/SettingsGroupAppearance';
import type { SettingsGroupAppearancePropsModel } from '@lib/frontend/settings/containers/SettingsGroupAppearance/SettingsGroupAppearance.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SettingsGroupAppearancePropsModel>({
  target: SettingsGroupAppearance,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
