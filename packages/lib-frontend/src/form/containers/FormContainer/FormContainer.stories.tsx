import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import type { FormContainerPropsModel } from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import { withId } from '@lib/shared/core/decorators/withId/withId';

const { Story, meta } = withStory<FormContainerPropsModel<object>>({
  defaultProps: {
    rows: withId([
      {
        fields: [
          { field: FORM_FIELD_TYPE.TEXT_FIELD, id: 'stringField', label: 'stringField' },
          {
            field: FORM_FIELD_TYPE.TEXT_FIELD,
            id: 'stringFieldOptional',
            label: 'stringFieldOptional',
          },
        ],
      },
      { fields: [{ field: FORM_FIELD_TYPE.TEXT_FIELD, id: 'numberField', label: 'numberField' }] },
    ]),
  },
  target: FormContainer,
  variants: [
    { props: { isFullWidth: true } },
    { props: { cancelLabel: 'cancel label', onCancel: () => null } },
  ],
});

export default meta;

export { Story };
