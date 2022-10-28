import type { FormStepsPropsModel } from '@lib/frontend/form/components/FormSteps/FormSteps.models';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';

export interface FormStepsFixtureModel
  extends FormStepsFixtureStepOneModel,
    FormStepsFixtureStepTwoModel,
    FormStepsFixtureStepThreeModel {}

export interface FormStepsFixtureStepOneModel {
  stepOne: string;
}

export interface FormStepsFixtureStepTwoModel {
  stepTwo: string;
}

export interface FormStepsFixtureStepThreeModel {
  stepThree: string;
}

export const STEPS_FIXTURE_PROPS: FormStepsPropsModel<
  FormStepsFixtureModel,
  [FormStepsFixtureStepOneModel, FormStepsFixtureStepTwoModel, FormStepsFixtureStepThreeModel]
> = {
  children: [
    <FormContainer<FormStepsFixtureStepOneModel>
      initialValues={{ stepOne: '' }}
      rows={withId([{ fields: [{ field: FORM_FIELD_TYPE.TEXT_FIELD, id: 'stepOne' }] }])}
    />,
    <FormContainer<FormStepsFixtureStepTwoModel>
      initialValues={{ stepTwo: '' }}
      rows={withId([{ fields: [{ field: FORM_FIELD_TYPE.TEXT_FIELD, id: 'stepTwo' }] }])}
    />,
    <FormContainer<FormStepsFixtureStepThreeModel>
      initialValues={{ stepThree: '' }}
      rows={withId([{ fields: [{ field: FORM_FIELD_TYPE.TEXT_FIELD, id: 'stepThree' }] }])}
    />,
  ],
};
