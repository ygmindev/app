import { SettingsInput } from '@lib/frontend/settings/components/SettingsInput/SettingsInput';
import { type SettingsInputPropsModel } from '@lib/frontend/settings/components/SettingsInput/SettingsInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SettingsInputPropsModel>({ target: SettingsInput });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
