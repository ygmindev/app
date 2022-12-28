import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { ICONS } from '@lib/frontend/core/components/Icon/Icon.constants';
import { IconText } from '@lib/frontend/core/components/IconText/IconText';
import type { IconTextPropsModel } from '@lib/frontend/core/components/IconText/IconText.models';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';

const { Story, meta } = withStory<IconTextPropsModel>({
  defaultProps: { children: 'text', icon: ICONS.person },
  target: IconText,
  variants: [
    ...Object.values(THEME_SIZE).map((size) => ({ props: { size } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    { props: { onPress: () => null } },
  ],
});

export { meta as default, Story };
