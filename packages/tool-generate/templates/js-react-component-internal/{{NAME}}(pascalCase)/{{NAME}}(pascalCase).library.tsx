import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import type { {{NAME}}PropsModel } from '{{PATH}}/{{NAME}}/{{NAME}}.models';
import { {{NAME}} } from '{{PATH}}/{{NAME}}/{{NAME}}';

const { Story, meta } = withStory<{{NAME}}(pascalCase)PropsModel>({
  defaultProps: {},
  target: {{NAME}}(pascalCase),
  variants: [],
});

export { meta as default, Story };
