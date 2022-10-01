import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';

const { Default, meta } = withStory<IconPropsModel>({
  defaultProps: { icon: ICON.person },
  target: Icon,
  variants: [
    ...Object.values(THEME_SIZE).map((size) => ({ props: { size } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    { props: { onPress: () => null } },
  ],
});

export { Default, meta as default };
