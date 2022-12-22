import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Content } from '@lib/frontend/core/components/Content/Content';
import type { ContentPropsModel } from '@lib/frontend/core/components/Content/Content.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';

const { Story, meta } = withStory<ContentPropsModel>({
  defaultProps: { children: <Text>children</Text>, title: 'title' },
  target: Content,
  variants: [{ props: { icon: ICON.person } }],
});

export { meta as default, Story };
