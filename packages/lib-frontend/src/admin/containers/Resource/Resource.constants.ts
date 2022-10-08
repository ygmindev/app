import { AccessTable } from '@lib/frontend/auth/containers/AccessTable/AccessTable';
import { UserTable } from '@lib/frontend/user/containers/UserTable/UserTable';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { ComponentType } from 'react';

export const RESOURCE_TABLES: Record<string, ComponentType | undefined> = {
  [ACCESS_RESOURCE_NAME]: AccessTable,
  [USER_RESOURCE_NAME]: UserTable,
};
