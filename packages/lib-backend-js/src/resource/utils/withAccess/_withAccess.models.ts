import { type ACCESS_ROLE } from '@lib/model/auth/Access/Access.constants';

export type _WithAccessParamsModel = Array<ACCESS_ROLE>;

export type _WithAccessModel = PropertyDecorator & MethodDecorator;
