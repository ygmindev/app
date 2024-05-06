import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
import { type WithScreenModel } from '@lib/shared/crawling/utils/withScreen/withScreen.models';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ screen });

describe(displayName, () => {
  let platform: WithScreenModel;

  beforeAll(async () => {
    platform = await withScreen();
  });

  test('works', async () => {
    const x = await platform.open('https://www.google.com');
    expect(1).toStrictEqual(1);
  });

  afterAll(async () => {
    await platform.close();
  });
});
