import { type FormStepPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';

export type GroupNameFormModel = {
  name?: string;
};

export type GroupNameFormPropsModel = FormStepPropsModel<GroupNameFormModel, GroupNameFormModel>;
