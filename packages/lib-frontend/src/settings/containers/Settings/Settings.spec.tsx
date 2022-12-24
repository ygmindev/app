import { Settings } from '@lib/frontend/settings/containers/Settings/Settings';
import type { SettingsPropsModel } from '@lib/frontend/settings/containers/Settings/Settings.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SettingsPropsModel>({
  target: Settings,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
