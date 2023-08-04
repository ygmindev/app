import { signIn } from '#app-web/ete/auth/utils/signIn/signIn';
import { screen } from '#lib-frontend/test/utils/screen/screen';
import { type ScreenModel } from '#lib-frontend/test/utils/screen/screen.models';

describe('sign in', () => {
  let screenF: ScreenModel;

  beforeAll(async () => {
    screenF = await screen();
  });

  test('works', async () => {
    await signIn({ isSnapshot: true, screen: screenF });
  });
});
