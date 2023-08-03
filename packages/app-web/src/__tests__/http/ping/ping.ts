import { screen } from '#lib-frontend/test/utils/screen/screen';
import { type ScreenModel } from '#lib-frontend/test/utils/screen/screen.models';
import { PING } from '#lib-shared/http/http.constants';

describe('dev', () => {
  let screenF: ScreenModel;

  beforeAll(async () => {
    screenF = await screen();
  });

  test('works', async () => {
    await screenF.goto(PING);
    await screenF.snapshot();

    expect(1).toStrictEqual(1);
  });
});
