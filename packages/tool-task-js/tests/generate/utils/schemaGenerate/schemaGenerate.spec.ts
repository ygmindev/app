import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { schemaGenerate } from '@tool/task/generate/utils/schemaGenerate/schemaGenerate';

const { displayName } = withTest({ schemaGenerate });

describe(displayName, () => {
  test('works', async () => {
    const result = await schemaGenerate({});
    expect(result).toStrictEqual({});
  });
});
