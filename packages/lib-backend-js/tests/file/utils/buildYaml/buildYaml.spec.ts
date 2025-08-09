import { buildYaml } from '@lib/backend/file/utils/buildYaml/buildYaml';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ buildYaml });

describe(displayName, () => {
  test('works', async () => {
    const result = await buildYaml({});
    expect(result).toStrictEqual({});
  });
});
