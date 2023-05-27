import { SettingsLocale } from '@lib/frontend/settings/containers/SettingsLocale/SettingsLocale';
import type { SettingsLocalePropsModel } from '@lib/frontend/settings/containers/SettingsLocale/SettingsLocale.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SettingsLocalePropsModel>({
  target: SettingsLocale,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
