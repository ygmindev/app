import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { RATING_CATEGORY } from '#lib-shared/funding/funding.constants';
import {
  type RatingAgencyFormModel,
  type RatingAgencyModel,
} from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

export const RATING_AGENCY_TABLE_PROPS = {
  columns: [{ id: 'name' }, ...Object.values(RATING_CATEGORY).map((id) => ({ id }))],
  title: ({ t }) => t('funding:ratingAgency'),
} satisfies Omit<ResourceTablePropsModel<RatingAgencyModel, RatingAgencyFormModel>, 'service'>;
