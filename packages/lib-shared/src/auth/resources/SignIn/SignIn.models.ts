import type { OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import type {
  EntityResourceDataModel,
  EntityResourcePartialModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export interface SignInModel {
  isNew?: boolean;
  token?: string;
  user?: EntityResourcePartialModel<UserModel>;
}

export interface SignInFormModel extends EntityResourceDataModel<OtpModel> {}

export interface SignInTokenModel {
  _id: string;
  claims: EntityResourceDataModel<UserModel>;
}
