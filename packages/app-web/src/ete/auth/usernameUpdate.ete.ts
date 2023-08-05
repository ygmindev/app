import { signIn } from '#app-web/ete/auth/utils/signIn/signIn';
import { FORM } from '#lib-frontend/form/form.constants';
import { screen } from '#lib-frontend/test/utils/screen/screen';
import { type ScreenModel } from '#lib-frontend/test/utils/screen/screen.models';
import { EMAIL, PERSONAL } from '#lib-frontend/user/user.constants';
import { ACCOUNT } from '#lib-shared/user/user.constants';

describe('usernameUpdate', () => {
  let screenF: ScreenModel;

  beforeAll(async () => {
    screenF = await screen();
  });

  test('works', async () => {
    await screenF.goto(`/${FORM}/${ACCOUNT}/${PERSONAL}/${EMAIL}`);
    await signIn({ screen: screenF });
    await screenF.snapshot();
  });
});
