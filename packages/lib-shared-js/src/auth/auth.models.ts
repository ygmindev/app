import { type GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { type SIGN_IN_METHOD } from '@lib/shared/auth/auth.constants';

export type SignInMethodModel = `${SIGN_IN_METHOD}`;

export type CredentialsModel = {
  Authorization?: string;

  [GROUP_RESOURCE_NAME]?: string;
};
