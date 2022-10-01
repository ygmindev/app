import type { StepsPropsModel } from '@lib/frontend/core/components/Steps/Steps.models';
import { FormContainer } from '@lib/frontend/core/containers/FormContainer/FormContainer';
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
      rows={withId([{ fields: [{ id: 'stepOne' }] }])}
    />,
    <FormContainer<StepsFixtureStepTwoModel>
      initialValues={{ stepTwo: '' }}
      rows={withId([{ fields: [{ id: 'stepTwo' }] }])}
    />,
    <FormContainer<StepsFixtureStepThreeModel>
      initialValues={{ stepThree: '' }}
      rows={withId([{ fields: [{ id: 'stepThree' }] }])}
    />,
  ],
};
