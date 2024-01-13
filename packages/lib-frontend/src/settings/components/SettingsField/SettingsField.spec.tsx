import { SettingsField } from '@lib-frontend/settings/components/SettingsField/SettingsField';
import { type SettingsFieldPropsModel } from '@lib-frontend/settings/components/SettingsField/SettingsField.models';
import { render } from '@lib-frontend/test/utils/render/render';
import { withTestComponent } from '@lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SettingsFieldPropsModel>({ target: SettingsField });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
