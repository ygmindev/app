import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { {{NAME}} } from '{{PATH}}/{{NAME}}/{{NAME}}';
import type { {{NAME}}PropsModel } from '{{PATH}}/{{NAME}}/{{NAME}}.models';

const { Default, meta } = withStory<{{NAME}}PropsModel>({
  defaultProps: {},
  target: {{NAME}},
  variants: [],
});

export { Default, meta as default };
