import {
  type UseResourceModel,
  type UseResourceParamsModel,
} from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type UseOwnResourceParamsModel<TType extends EntityResourceModel> = Omit<
  UseResourceParamsModel<TType, UserModel>,
  'rootName'
>;

export type UseOwnResourceModel<TType extends EntityResourceModel> = UseResourceModel<
  TType,
  UserModel
>;
