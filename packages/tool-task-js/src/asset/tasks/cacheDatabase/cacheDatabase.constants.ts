import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';

export const CACHE_RESOURCES = {
  [USER_RESOURCE_NAME]: {
    count: 5,
  },
} satisfies Record<string, { count: number }>;
