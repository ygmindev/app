import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SIGN_IN_INPUT } from '@lib/model/auth/SignIn/SignInInput/SignInInput.constants';
import { SignInInputModel } from '@lib/model/auth/SignIn/SignInInput/SignInInput.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: SIGN_IN_INPUT })
export class SignInInput implements SignInInputModel {
  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  callingCode?: string;

  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  email?: string;

  @withField({ type: DATA_TYPE.STRING })
  otp!: string;

  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  phone?: string;
}
