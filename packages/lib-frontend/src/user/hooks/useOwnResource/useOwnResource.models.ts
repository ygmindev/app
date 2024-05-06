import {
  type UseResourceModel,
  type UseResourceParamsModel,
} from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type UseOwnResourceParamsModel<TType, TForm = EntityResourceDataModel<TType>> = Omit<
  UseResourceParamsModel<TType, TForm, UserModel>,
  'rootName'
>;

export type UseOwnResourceModel<TType, TForm = EntityResourceDataModel<TType>> = UseResourceModel<
  TType,
  TForm,
  UserModel
>;
