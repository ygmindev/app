import { type PartialModel } from '#lib-shared/core/core.models';
import { CREDIT_RATING_VALUE } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type CreditRatingValueModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';

export const RATING_AGENCY_RESOURCE_NAME = 'RatingAgency';

export const RATING_AGENCY_VALUE_ALIAS: Record<
  string,
  PartialModel<Record<CreditRatingValueModel, string>>
> = {
  "Moody's": {
    [CREDIT_RATING_VALUE.AAA]: 'Aaa',
    [CREDIT_RATING_VALUE.AAp]: 'Aa1',
    [CREDIT_RATING_VALUE.AA]: 'Aa2',
    [CREDIT_RATING_VALUE.AAm]: 'Aa3',
    [CREDIT_RATING_VALUE.Ap]: 'A1',
    [CREDIT_RATING_VALUE.A]: 'A2',
    [CREDIT_RATING_VALUE.Am]: 'A3',
    [CREDIT_RATING_VALUE.BBBp]: 'Baa1',
    [CREDIT_RATING_VALUE.BBB]: 'Baa2',
    [CREDIT_RATING_VALUE.BBBm]: 'Baa3',
    [CREDIT_RATING_VALUE.BBp]: 'Ba1',
    [CREDIT_RATING_VALUE.BB]: 'Ba2',
    [CREDIT_RATING_VALUE.BBm]: 'Ba3',
    [CREDIT_RATING_VALUE.Bp]: 'B1',
    [CREDIT_RATING_VALUE.B]: 'B2',
    [CREDIT_RATING_VALUE.Bm]: 'B3',
    [CREDIT_RATING_VALUE.CCCp]: 'Caa1',
    [CREDIT_RATING_VALUE.CCC]: 'Caa2',
    [CREDIT_RATING_VALUE.CCCm]: 'Caa3',
  },
};
