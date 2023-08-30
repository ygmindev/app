import { type UseResourceMethodHookParamsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type CreditRatingServiceModel } from '#lib-shared/funding/resources/CreditRating/CreditRatingService/CreditRatingService.models';
import {
type  FundingModel,
} from '#lib-shared/funding/resources/Funding/Funding.models';

export type UseCreditRatingResourceParamsModel =
  UseResourceMethodHookParamsModel<FundingModel>;

export type UseCreditRatingResourceModel
  = Pick<CreditRatingServiceModel, 'get'>;
