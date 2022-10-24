import { APP_NAME } from '@app/web/app/app.constants';
import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { trimPathname } from '@lib/frontend/routing/utils/trimPathname/trimPathname';
import { screen } from '@lib/frontend/testing/utils/screen/screen';
import type { ScreenModel } from '@lib/frontend/testing/utils/screen/screen.models';
import { appUri } from '@lib/shared/http/utils/appUri/appUri';

const URI = appUri({ name: APP_NAME });

describe('sign in', () => {
  let _screen: ScreenModel;

  beforeAll(async () => {
    _screen = await screen();
  });

  test('works', async () => {
    const x = await _screen.open(trimPathname(`${URI}/${SIGN_IN}`));
    expect(1).toStrictEqual(1);
  });

  afterAll(async () => {
    await _screen.close();
  });
});
