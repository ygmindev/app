import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Press } from '@lib/frontend/core/components/Press/Press';
import type { PressPropsModel } from '@lib/frontend/core/components/Press/Press.models';
import { Text } from '@lib/frontend/core/components/Text/Text';

const { Story, meta } = withStory<PressPropsModel>({
  defaultProps: {
    children: <Text>Press</Text>,
  },
  target: Press,
  variants: [
    { props: { isPressed: true } },
    { props: { isDisabled: true } },
    { props: { confirmMessage: 'confirm' } },
    { props: { tooltip: 'tooltip' } },
  ],
});

export { Story, meta as default };
