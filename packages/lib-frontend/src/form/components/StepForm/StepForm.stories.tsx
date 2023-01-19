import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { StepForm } from '@lib/frontend/form/components/StepForm/StepForm';
import type { StepFormPropsModel } from '@lib/frontend/form/components/StepForm/StepForm.models';

const { Story, meta } = withStory<StepFormPropsModel>({
  defaultProps: {},
  target: StepForm,
  variants: [],
});

export { meta as default, Story };
