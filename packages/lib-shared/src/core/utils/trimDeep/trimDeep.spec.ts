import { trimDeep } from '@lib/shared/core/utils/trimDeep/trimDeep';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ trimDeep });

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
