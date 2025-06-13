import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { TestScreen } from '@lib/backend/test/utils/TestScreen/TestScreen';
import {
  type WithTestScreenModel,
  type WithTestScreenParamsModel,
} from '@lib/backend/test/utils/withTestScreen/withTestScreen.models';
import { config as databaseConfig } from '@lib/config/database/database.mongo';
import { SIGN_IN } from '@lib/shared/auth/auth.constants';
import { KEY_TYPE, SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';
import { APP_URI } from '@lib/shared/http/http.constants';
import { USER_FIXTURE } from '@lib/shared/user/resources/User/User.fixtures';

export const withTestScreen = ({
  email = true,
  testName,
}: WithTestScreenParamsModel): WithTestScreenModel => {
  let cleanUp: (() => Promise<void>) | undefined;
  const screen = new TestScreen({ dirname: testName, rootUri: APP_URI });

  beforeAll(async () => {
    ({ cleanUp } = await initialize({ database: databaseConfig.params() }));

    // warn start
    await screen.open('/');

    // sign in
    if (email) {
      await screen.open(SIGN_IN);
      await screen
        .find({ type: SELECTOR_TYPE.TEST_ID, value: 'email' })
        .then((h) => h?.type((email === true ? USER_FIXTURE.email : email) ?? ''));
      testName === SIGN_IN && (await screen.snapshot({ filename: 'enter email' }));
      await screen.key(KEY_TYPE.ENTER);
      await screen
        .find({ type: SELECTOR_TYPE.TEST_ID, value: 'otp' })
        .then((h) => h?.type(process.env.SERVER_OTP_STATIC ?? ''));
      testName === SIGN_IN && (await screen.snapshot({ filename: 'enter otp' }));

      expect(true).toBeTruthy();
    }
  });

  afterAll(async () => {
    await cleanUp?.();
    await screen.close();
  });

  return { screen };
};
