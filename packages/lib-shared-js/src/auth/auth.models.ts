import { type GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';

export type CredentialsModel = {
  Authorization?: string;

  [GROUP_RESOURCE_NAME]?: string;
};
