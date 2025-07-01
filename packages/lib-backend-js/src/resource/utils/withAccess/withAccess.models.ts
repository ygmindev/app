import { type _WithAccessModel } from '@lib/backend/resource/utils/withAccess/_withAccess.models';
import { type ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';

export type WithAccessParamsModel = {
  access?: ACCESS_LEVEL;
};

export type WithAccessModel = _WithAccessModel;
