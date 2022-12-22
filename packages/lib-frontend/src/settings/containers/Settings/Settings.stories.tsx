import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Settings } from '@lib/frontend/settings/containers/Settings/Settings';
import type { SettingsPropsModel } from '@lib/frontend/settings/containers/Settings/Settings.models';

const { Story, meta } = withStory<SettingsPropsModel>({
  defaultProps: {},
  target: Settings,
  variants: [],
});

export { Story, meta as default };
