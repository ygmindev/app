import { type FormStepPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { type CreditRatingFormModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';

export type CreditRatingWatchFormModel = Pick<CreditRatingFormModel, 'longTermWatch'>;

export type CreditRatingWatchFormPropsModel = FormStepPropsModel<
  CreditRatingFormModel,
  CreditRatingWatchFormModel
>;
