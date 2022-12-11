import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { IconText } from '@lib/frontend/core/components/IconText/IconText';
import type { IconTextPropsModel } from '@lib/frontend/core/components/IconText/IconText.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/utils/theme/theme.constants';

const { Default, meta } = withStory<IconTextPropsModel>({
  defaultProps: { children: 'text', icon: ICON.person },
  target: IconText,
  variants: [
    ...Object.values(THEME_SIZE).map((size) => ({ props: { size } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    { props: { onPress: () => null } },
  ],
});

export { Default, meta as default };
