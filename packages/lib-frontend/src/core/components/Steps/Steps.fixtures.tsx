import type { StepsPropsModel } from '@lib/frontend/core/components/Steps/Steps.models';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';

export interface StepsFixtureModel
  extends StepsFixtureStepOneModel,
    StepsFixtureStepTwoModel,
    StepsFixtureStepThreeModel {}

export interface StepsFixtureStepOneModel {
  stepOne: string;
}

export interface StepsFixtureStepTwoModel {
  stepTwo: string;
}

export interface StepsFixtureStepThreeModel {
  stepThree: string;
}

export const STEPS_FIXTURE_PROPS: StepsPropsModel<StepsFixtureModel> = {
  children: [
    <FormContainer<StepsFixtureStepOneModel>
      initialValues={{ stepOne: '' }}
      rows={withId([{ fields: [{ field: FORM_FIELD_TYPE.TEXT_FIELD, id: 'stepOne' }] }])}
    />,
    <FormContainer<StepsFixtureStepTwoModel>
      initialValues={{ stepTwo: '' }}
      rows={withId([{ fields: [{ field: FORM_FIELD_TYPE.TEXT_FIELD, id: 'stepTwo' }] }])}
    />,
    <FormContainer<StepsFixtureStepThreeModel>
      initialValues={{ stepThree: '' }}
      rows={withId([{ fields: [{ field: FORM_FIELD_TYPE.TEXT_FIELD, id: 'stepThree' }] }])}
    />,
  ],
};
