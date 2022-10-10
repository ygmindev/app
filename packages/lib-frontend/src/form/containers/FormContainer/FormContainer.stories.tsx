import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import type { FormContainerPropsModel } from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import { withId } from '@lib/shared/core/decorators/withId/withId';

const { Default, meta } = withStory<FormContainerPropsModel<object>>({
  defaultProps: {
    rows: withId([
      {
        fields: [
          { id: 'stringField', label: 'stringField' },
          { id: 'stringFieldOptional', label: 'stringFieldOptional' },
        ],
      },
      { fields: [{ id: 'numberField', label: 'numberField' }] },
    ]),
  },
  target: FormContainer,
  variants: [
    { props: { isFullWidth: true } },
    { props: { cancelLabel: 'close', onClose: () => null } },
  ],
});

export { Default, meta as default };
