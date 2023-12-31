import { type FormStepPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { type CreditRatingFormModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';

export type FundingAgencyFormModel = Pick<CreditRatingFormModel, 'RatingAgency'> & {
  _agency?: string;
};

export type FundingAgencyFormPropsModel = FormStepPropsModel<
  CreditRatingFormModel,
  FundingAgencyFormModel
>;
