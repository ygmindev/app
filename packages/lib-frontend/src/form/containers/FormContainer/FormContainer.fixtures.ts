import { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import type { FormContainerPropsModel } from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import { withId } from '@lib/shared/core/decorators/withId/withId';

// TODO: move to shared
export interface FormContainerFixtureModel {
  numberField: number;
  stringField: string;
  stringFieldOptional?: string;
}

export const FORM_CONTAINER_PROPS_FIXTURE: FormContainerPropsModel<FormContainerFixtureModel> = {
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
};
