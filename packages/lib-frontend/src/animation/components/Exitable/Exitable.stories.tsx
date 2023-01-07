import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import type { ExitablePropsModel } from '@lib/frontend/animation/components/Exitable/Exitable.models';

const { Story, meta } = withStory<ExitablePropsModel>({
  defaultProps: {},
  target: Exitable,
  variants: [],
});

export { meta as default, Story };
