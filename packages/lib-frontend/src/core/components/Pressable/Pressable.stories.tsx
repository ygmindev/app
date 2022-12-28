import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { Text } from '@lib/frontend/core/components/Text/Text';

const { Story, meta } = withStory<Pressable>({
  defaultProps: {
    children: <Text>Press</Text>,
  },
  target: Pressable,
  variants: [
    { props: { isPressed: true } },
    { props: { isDisabled: true } },
    { props: { confirmMessage: 'confirm' } },
    { props: { tooltip: 'tooltip' } },
  ],
});

export { meta as default, Story };
