import { UserTable } from '@lib/frontend/user/containers/UserTable/UserTable';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { ComponentType } from 'react';

export const RESOURCE_TABLES: Record<string, ComponentType | undefined> = {
  [USER_RESOURCE_NAME]: UserTable,
};
