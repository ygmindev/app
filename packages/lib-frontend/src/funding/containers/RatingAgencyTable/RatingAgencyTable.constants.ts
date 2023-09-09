import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { CREDIT_RATING_CATEGORY } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import {
  type RatingAgencyFormModel,
  type RatingAgencyModel,
} from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

export const RATING_AGENCY_TABLE_PROPS = {
  columns: [{ _id: 'name' }, ...Object.values(CREDIT_RATING_CATEGORY).map((id) => ({ _id: id }))],
  title: ({ t }) => t('funding:ratingAgency'),
} satisfies Omit<ResourceTablePropsModel<RatingAgencyModel, RatingAgencyFormModel>, 'service'>;
