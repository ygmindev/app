import { {{NAME}} } from '{{PATH}}/{{NAME}}/{{NAME}}';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => {{NAME}} });

describe(displayName, () => {
  test('works', async () => {
    const result = await {{NAME}}({});
    expect(result).toStrictEqual({});
  });
});
