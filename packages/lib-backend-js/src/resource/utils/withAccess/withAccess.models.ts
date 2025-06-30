import { type _WithAccessModel } from '@lib/backend/resource/utils/withAccess/_withAccess.models';
import { type AccessLevelModel } from '@lib/model/auth/Access/Access.models';

export type WithAccessParamsModel = {
  access?: AccessLevelModel;
};

export type WithAccessModel = _WithAccessModel;
