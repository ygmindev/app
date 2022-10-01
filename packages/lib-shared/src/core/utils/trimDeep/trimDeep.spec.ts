import { trimDeep } from '@lib/shared/core/utils/trimDeep/trimDeep';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => trimDeep });

describe(displayName, () => {
  test('works', async () => {
    const VALUE = `
      string with new lines and
      multiple  spaces
    `;
    const result = trimDeep(VALUE);
    expect(result).toStrictEqual('string with new lines and multiple spaces');
  });
});
