import { type FormStepPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { type CreditRatingFormModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';

export type AgencyFormModel = Pick<CreditRatingFormModel, '_agency'>;

export type AgencyFormPropsModel = FormStepPropsModel<CreditRatingFormModel, AgencyFormModel>;
