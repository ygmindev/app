import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { TestScreen } from '@lib/backend/test/utils/TestScreen/TestScreen';
import {
  type WithTestScreenModel,
  type WithTestScreenParamsModel,
} from '@lib/backend/test/utils/withTestScreen/withTestScreen.models';
import { config as databaseConfig } from '@lib/config/database/database.mongo';
import { APP_MENU_TEST_ID } from '@lib/frontend/app/containers/AppMenu/AppMenu.constants';
import { USER_FIXTURE } from '@lib/model/user/User/User.fixtures';
import { SIGN_IN } from '@lib/shared/auth/auth.constants';
import { KEY_TYPE, SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';
import { APP_URI } from '@lib/shared/http/http.constants';

export const withTestScreen = ({
  email = true,
  testName,
}: WithTestScreenParamsModel): WithTestScreenModel => {
  let cleanUp: (() => Promise<void>) | undefined;
  const screen = new TestScreen({ dirname: testName, rootUri: APP_URI });

  beforeAll(async () => {
    ({ cleanUp } = await initialize({ database: databaseConfig.params() }));

    await screen.open('/');

    // sign in
    if (email) {
      // enter email
      const emailF = (email === true ? USER_FIXTURE.email : email) ?? '';
      await screen.open(SIGN_IN);
      await screen.find({ value: 'email' }).then((h) => h?.type(emailF));
      testName === SIGN_IN && (await screen.snapshot({ filename: 'enter email' }));
      await screen.key(KEY_TYPE.ENTER);

      // enter otp
      await screen.find({ value: 'otp' }).then((h) => h?.type(process.env.SERVER_OTP_STATIC ?? ''));
      testName === SIGN_IN && (await screen.snapshot({ filename: 'enter otp' }));

      // verify user
      await screen.find({ value: `${APP_MENU_TEST_ID}-toggle` }).then((h) => h?.press());
      await screen
        .find({ value: `${APP_MENU_TEST_ID}-title` })
        .then((h) => h?.find({ type: SELECTOR_TYPE.TEXT, value: emailF }));
    }
  });

  afterAll(async () => {
    await cleanUp?.();
    await screen.close();
  });

  return { screen };
};
