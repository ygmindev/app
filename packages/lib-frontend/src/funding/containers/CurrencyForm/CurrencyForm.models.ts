import { type FormStepPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { type FundingFormModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export type CurrencyFormModel = Pick<FundingFormModel, 'currency'>;

export type CurrencyFormPropsModel = FormStepPropsModel<FundingFormModel, CurrencyFormModel>;
