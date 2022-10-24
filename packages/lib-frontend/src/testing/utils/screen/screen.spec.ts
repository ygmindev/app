import { screen } from '@lib/frontend/testing/utils/screen/screen';
import type { ScreenModel } from '@lib/frontend/testing/utils/screen/screen.models';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => screen });

describe(displayName, () => {
  let platform: ScreenModel;

  beforeAll(async () => {
    platform = await screen();
  });

  test('works', async () => {
    const x = await platform.open('https://www.google.com');
    expect(1).toStrictEqual(1);
  });

  afterAll(async () => {
    await platform.close();
  });
});
