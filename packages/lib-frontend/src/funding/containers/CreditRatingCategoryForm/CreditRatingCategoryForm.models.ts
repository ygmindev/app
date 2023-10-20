import { type FormStepPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { type CreditRatingFormModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';

export type CreditRatingCategoryFormModel = Pick<CreditRatingFormModel, 'longTermStep'>;

export type CreditRatingCategoryFormPropsModel = FormStepPropsModel<
  CreditRatingFormModel,
  CreditRatingCategoryFormModel
>;
