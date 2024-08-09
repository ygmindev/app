import { type AccessLevelModel } from '@lib/shared/auth/resources/Access/Access.models';

export type WithAccessParamsModel = {
  access?: AccessLevelModel;
};

export type WithAccessModel = PropertyDecorator & MethodDecorator;
