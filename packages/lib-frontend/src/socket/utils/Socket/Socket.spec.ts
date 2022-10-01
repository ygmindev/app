import { Socket } from '@lib/frontend/socket/utils/Socket/Socket';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => Socket });

describe(displayName, () => {
  test('works', async () => {
    const result = new Socket('');
    expect(result).toStrictEqual({});
  });
});
