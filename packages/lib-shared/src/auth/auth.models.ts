import { type SIGN_IN_METHOD } from '@lib/shared/auth/auth.constants';
import { type GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';

export type SignInMethodModel = `${SIGN_IN_METHOD}`;

export type CredentialsModel = {
  Authorization?: string;
  [GROUP_RESOURCE_NAME]?: string;
};
