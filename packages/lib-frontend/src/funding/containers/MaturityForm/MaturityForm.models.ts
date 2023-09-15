import { type FormStepPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { type FundingFormModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export type MaturityFormModel = Pick<FundingFormModel, 'maturity'>;

export type MaturityFormPropsModel = FormStepPropsModel<FundingFormModel, MaturityFormModel>;
