import type { AccessLevelModel } from '#lib-shared/auth/resources/Access/Access.models';

export interface WithAccessParamsModel {
  level?: AccessLevelModel;
}
