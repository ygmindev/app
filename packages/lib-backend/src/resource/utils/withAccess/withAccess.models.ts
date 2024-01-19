import { type AccessLevelModel } from '@lib/shared/auth/resources/Access/Access.models';

export type WithAccessParamsModel = {
  level?: AccessLevelModel;
};

export type WithAccessModel = PropertyDecorator & MethodDecorator;
