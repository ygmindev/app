import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import type { _FormPropsModel } from '@lib/frontend/form/components/Form/_Form.models';
import { Form } from '@lib/frontend/form/components/Form/Form';

const { Story, meta } = withStory<_FormPropsModel>({
  defaultProps: {},
  target: Form,
  variants: [],
});

export { Story, meta as default };
