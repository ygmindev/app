import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import type { PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { Text } from '@lib/frontend/core/components/Text/Text';

const { Story, meta } = withStory<PressablePropsModel>({
  defaultProps: {
    children: (params) => <Text>{`${params}`}</Text>,
  },
  target: Pressable,
  variants: [
    { props: { isPressed: true } },
    { props: { isDisabled: true } },
    { props: { confirmMessage: 'confirm' } },
  ],
});

export { meta as default, Story };
