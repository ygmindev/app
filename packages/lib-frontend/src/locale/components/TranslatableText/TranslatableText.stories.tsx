import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import type { TranslatableTextPropsModel } from '@lib/frontend/locale/components/TranslatableText/TranslatableText.models';

const { Story, meta } = withStory<TranslatableTextPropsModel>({
  defaultProps: {},
  target: TranslatableText,
  variants: [],
});

export { meta as default, Story };
