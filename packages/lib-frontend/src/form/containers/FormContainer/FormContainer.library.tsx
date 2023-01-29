import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import type { FormContainerFixtureModel } from '@lib/frontend/form/containers/FormContainer/FormContainer.fixtures';
import { FORM_CONTAINER_PROPS_FIXTURE } from '@lib/frontend/form/containers/FormContainer/FormContainer.fixtures';
import type { FormContainerPropsModel } from '@lib/frontend/form/containers/FormContainer/FormContainer.models';

const { Story, meta } = withStory<FormContainerPropsModel<FormContainerFixtureModel>>({
  defaultProps: FORM_CONTAINER_PROPS_FIXTURE,
  target: FormContainer,
  variants: [
    { props: { isFullWidth: true } },
    { props: { cancelLabel: 'cancel label', onCancel: () => null } },
  ],
});

export default meta;

export { Story };
