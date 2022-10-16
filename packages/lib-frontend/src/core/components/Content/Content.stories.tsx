import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Content } from '@lib/frontend/core/components/Content/Content';
import type { ContentPropsModel } from '@lib/frontend/core/components/Content/Content.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';

const { Default, meta } = withStory<ContentPropsModel>({
  defaultProps: { children: <Text>children</Text>, title: 'title' },
  target: Content,
  variants: [{ props: { icon: ICON.person } }],
});

export { Default, meta as default };
