import { type FormStepPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { type FundingFormModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export type AmountFormModel = Pick<FundingFormModel, 'amount'>;

export type AmountFormPropsModel = FormStepPropsModel<FundingFormModel, AmountFormModel>;
