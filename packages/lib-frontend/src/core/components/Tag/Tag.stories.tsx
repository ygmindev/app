import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Tag } from '@lib/frontend/core/components/Tag/Tag';
import type { TagPropsModel } from '@lib/frontend/core/components/Tag/Tag.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { THEME_COLOR } from '@lib/frontend/styling/utils/theme/theme.constants';

const { Default, meta } = withStory<TagPropsModel>({
  defaultProps: { children: 'text' },
  target: Tag,
  variants: [
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    { props: { icon: ICON.person } },
    { props: { isCapitalize: true } },
    { props: { isUppercase: true } },
  ],
});

export { Default, meta as default };
