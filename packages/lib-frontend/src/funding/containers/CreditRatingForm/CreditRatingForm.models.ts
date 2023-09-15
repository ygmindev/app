import { type FormStepPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { type FundingFormModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export type CreditRatingFormModel = Pick<FundingFormModel, 'CreditRating'>;

export type CreditRatingFormPropsModel = FormStepPropsModel<
  FundingFormModel,
  CreditRatingFormModel
>;
