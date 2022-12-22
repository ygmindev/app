import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { FormSteps } from '@lib/frontend/form/components/FormSteps/FormSteps';
import type {
  FormStepsFixtureModel,
  FormStepsFixtureStepOneModel,
  FormStepsFixtureStepThreeModel,
  FormStepsFixtureStepTwoModel,
} from '@lib/frontend/form/components/FormSteps/FormSteps.fixtures';
import { STEPS_FIXTURE_PROPS } from '@lib/frontend/form/components/FormSteps/FormSteps.fixtures';
import type { FormStepsPropsModel } from '@lib/frontend/form/components/FormSteps/FormSteps.models';

const { Story, meta } = withStory<
  FormStepsPropsModel<
    FormStepsFixtureModel,
    [FormStepsFixtureStepOneModel, FormStepsFixtureStepTwoModel, FormStepsFixtureStepThreeModel]
  >
>({
  defaultProps: STEPS_FIXTURE_PROPS,
  displayName: 'FormSteps',
  target: (props) => (
    <Wrapper
      height={500}
      width={500}>
      <FormSteps {...props} />
    </Wrapper>
  ),
});

export default meta;

export { Story };
