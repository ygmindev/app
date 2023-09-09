import { type FormContainerPropsModel } from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { withId } from '#lib-shared/core/utils/withId/withId';

// TODO: move to shared
export type FormContainerFixtureModel = {
  numberField: number;
  stringField: string;
  stringFieldOptional?: string;
};

export const FORM_CONTAINER_PROPS_FIXTURE: FormContainerPropsModel<FormContainerFixtureModel> = {
  rows: withId([
    {
      fields: [
        { _id: 'stringField', label: 'stringField' },
        // {
        //   field: FORM_PROPERTY_TYPE.TEXT_FIELD,
        //   _id: 'stringFieldOptional',
        //   label: 'stringFieldOptional',
        // },
      ],
    },
    // { fields: [{ field: FORM_PROPERTY_TYPE.TEXT_FIELD, _id: 'numberField', label: 'numberField' }] },
  ]),
};
