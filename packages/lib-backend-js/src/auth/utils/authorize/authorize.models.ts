import { type RequestContextModel } from '@lib/config/api/api.models';
import { type ACCESS_ROLE } from '@lib/model/auth/Access/Access.constants';

export type AuthorizeParamsModel = {
  context: RequestContextModel;
  roles?: Array<ACCESS_ROLE>;
};

export type AuthorizeModel = boolean;
