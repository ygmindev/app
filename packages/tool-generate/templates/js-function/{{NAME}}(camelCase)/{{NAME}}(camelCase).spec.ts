import { {{NAME}}(camelCase) } from '{{PATH}}/{{NAME}}(camelCase)/{{NAME}}(camelCase)';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => {{NAME}}(camelCase) });

describe(displayName, () => {
  test('works', async () => {
    const result = await {{NAME}}(camelCase)({});
    expect(result).toStrictEqual({});
  });
});
