import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Steps } from '@lib/frontend/core/components/Steps/Steps';
import type { StepsFixtureModel } from '@lib/frontend/core/components/Steps/Steps.fixtures';
import { STEPS_FIXTURE_PROPS } from '@lib/frontend/core/components/Steps/Steps.fixtures';
import type { StepsPropsModel } from '@lib/frontend/core/components/Steps/Steps.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';

const { Default, meta } = withStory<StepsPropsModel<StepsFixtureModel>>({
  defaultProps: STEPS_FIXTURE_PROPS,
  displayName: 'Steps',
  target: (props) => (
    <Wrapper
      height={500}
      width={500}>
      <Steps {...props} />
    </Wrapper>
  ),
});

export { Default, meta as default };
