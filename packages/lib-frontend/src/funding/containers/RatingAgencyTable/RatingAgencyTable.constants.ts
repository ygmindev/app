import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';
import {
  type RatingAgencyFormModel,
  type RatingAgencyModel,
} from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

export const RATING_AGENCY_TABLE_PROPS = {
  columns: [
    { id: 'name' },
    // ...Object.values(CREDIT_RATING_VALUE)
    //   .sort((x, y) => CREDIT_RATING_VALUE_RANK[x] - CREDIT_RATING_VALUE_RANK[y])
    //   .map((id) => ({ id })),
  ],
  name: RATING_AGENCY_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<RatingAgencyModel, RatingAgencyFormModel>, 'service'>;
