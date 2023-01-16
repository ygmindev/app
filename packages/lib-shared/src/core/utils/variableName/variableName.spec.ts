import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => variableName });

describe(displayName, () => {
  const NAME = vi.fn();
  test('works', async () => {
    const result = variableName(() => NAME);
    expect(result).toStrictEqual('NAME');
  });
});
