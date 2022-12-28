import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { ICONS } from '@lib/frontend/core/components/Icon/Icon.constants';
import { Tag } from '@lib/frontend/core/components/Tag/Tag';
import type { TagPropsModel } from '@lib/frontend/core/components/Tag/Tag.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';

const { Story, meta } = withStory<TagPropsModel>({
  defaultProps: { children: 'text' },
  target: Tag,
  variants: [
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    { props: { icon: ICONS.person } },
    { props: { isCapitalize: true } },
    { props: { isUppercase: true } },
  ],
});

export { meta as default, Story };
