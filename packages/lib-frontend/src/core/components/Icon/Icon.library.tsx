import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICONS } from '@lib/frontend/core/components/Icon/Icon.constants';
import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';

const { Story, meta } = withStory<IconPropsModel>({
  defaultProps: { icon: ICONS.person },
  target: Icon,
  variants: [
    ...Object.values(THEME_SIZE).map((size) => ({ props: { size } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    { props: { onPress: () => null } },
  ],
});

export { meta as default, Story };
