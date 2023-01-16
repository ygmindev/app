import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { SettingsPage } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage';
import type { SettingsPagePropsModel } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage.models';

const { Story, meta } = withStory<SettingsPagePropsModel>({
  defaultProps: {},
  target: SettingsPage,
  variants: [],
});

export { meta as default, Story };
