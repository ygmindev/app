import { type UseResourceMethodHookParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type CardImplementationModel } from '@lib/model/billing/Card/CardImplementation/CardImplementation.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type UseCardResourceParamsModel = UseResourceMethodHookParamsModel<UserModel>;

export type UseCardResourceModel = Pick<
  CardImplementationModel,
  'create' | 'get' | 'update' | 'remove'
>;
