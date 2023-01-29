import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { {{NAME}}(pascalCase)Page } from '@lib/frontend/{{MODULE}}(camelCase)/pages/{{NAME}}(pascalCase)Page/{{NAME}}(pascalCase)Page';
import type { {{NAME}}(pascalCase)PagePropsModel } from '@lib/frontend/{{MODULE}}(camelCase)/pages/{{NAME}}(pascalCase)Page/{{NAME}}(pascalCase)Page.models';

const { Story, meta } = withStory<{{NAME}}(pascalCase)PagePropsModel>({
  defaultProps: {},
  target: {{NAME}}(pascalCase)Page,
  variants: [],
});

export { meta as default, Story };
