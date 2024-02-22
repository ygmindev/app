import {
  type SignInModel,
  type SignInParamsModel,
} from '@app/web/ete/auth/utils/signIn/signIn.models';
import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import {
  KEY_TYPE,
  SELECTOR_TYPE,
} from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { USER_FIXTURE } from '@lib/shared/user/resources/User/User.fixtures';

export const signIn = async ({ isSnapshot, screen }: SignInParamsModel): Promise<SignInModel> => {
  screen.uri().pathname !== trimPathname(SIGN_IN) && (await screen.open(SIGN_IN));
  await screen
    .find({ key: 'data-testid', type: SELECTOR_TYPE.DATA, value: 'email' })
    .then((h) => h?.type(USER_FIXTURE.email ?? ''));
  isSnapshot && (await screen.snapshot());
  await screen.key(KEY_TYPE.ENTER);
  await screen
    .find({ key: 'data-testid', type: SELECTOR_TYPE.DATA, value: 'otp' })
    .then((h) => h?.type(process.env.SERVER_OTP_STATIC ?? ''));
  isSnapshot && (await screen.snapshot());
};
