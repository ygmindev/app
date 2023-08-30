import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';

export const CACHE_RESOURCES = {
  [RATING_AGENCY_RESOURCE_NAME]: {
    count: 5,
  },

  [USER_RESOURCE_NAME]: {
    count: 5,
  },
} satisfies Record<string, { count: number }>;
