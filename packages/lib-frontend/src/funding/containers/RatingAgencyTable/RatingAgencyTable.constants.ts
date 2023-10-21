import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import {
  type RatingAgencyFormModel,
  type RatingAgencyModel,
} from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

export const RATING_AGENCY_TABLE_PROPS = {
  columns: [
    { id: 'name' },
    // ...Object.values(CREDIT_RATING_STEP)
    //   .sort((x, y) => CREDIT_RATING_STEP_RANK[x] - CREDIT_RATING_STEP_RANK[y])
    //   .map((id) => ({ id })),
  ],
  title: ({ t }) => t('funding:ratingAgency'),
} satisfies Omit<ResourceTablePropsModel<RatingAgencyModel, RatingAgencyFormModel>, 'service'>;
