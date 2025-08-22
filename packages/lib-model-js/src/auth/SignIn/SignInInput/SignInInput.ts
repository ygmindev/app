import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SIGN_IN_INPUT } from '@lib/model/auth/SignIn/SignInInput/SignInInput.constants';
import { SignInInputModel } from '@lib/model/auth/SignIn/SignInInput/SignInInput.models';

@withEntity({ name: SIGN_IN_INPUT })
export class SignInInput implements SignInInputModel {
  @withField({ isOptional: true })
  callingCode?: string;

  @withField({ isOptional: true })
  email?: string;

  @withField()
  otp!: string;

  @withField({ isOptional: true })
  phone?: string;
}
