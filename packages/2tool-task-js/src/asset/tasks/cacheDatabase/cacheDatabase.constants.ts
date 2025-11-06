import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';

export const CACHE_RESOURCES = {
  [USER_RESOURCE_NAME]: {
    count: 5,
  },
} satisfies Record<string, { count: number }>;
