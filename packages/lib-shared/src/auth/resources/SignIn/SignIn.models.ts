import { type OtpModel } from '#lib-shared/auth/resources/Otp/Otp.models';
import {
  type EntityResourceDataModel,
  type EntityResourcePartialModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type SignInModel = {
  isNew?: boolean;
  token?: string;
  user?: EntityResourcePartialModel<UserModel>;
};

export type SignInFormModel = EntityResourceDataModel<OtpModel>;

export type SignInTokenModel = {
  _id: string;
  claims: EntityResourceDataModel<UserModel>;
};
